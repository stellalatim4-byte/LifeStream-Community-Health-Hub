
import { GoogleGenAI, Modality } from "@google/genai";
import { AppConfig } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Manual implementation of base64 decoding as per SDK guidelines
function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

// Manual implementation of raw PCM audio decoding as per SDK guidelines
async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

/**
 * Simplifies complex medical jargon into plain language.
 */
export const simplifyMedicalText = async (text: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Simplify this for someone with low literacy. Use short words and clear actions. Text: "${text}"`,
    });
    return response.text;
  } catch (error) {
    return text;
  }
};

/**
 * Generates a localized emergency alert message including real-time stock data.
 */
export const generateEmergencyDraft = async (
  type: string, 
  details: string, 
  config: AppConfig,
  stockRequired: number,
  stockAvailable: number
) => {
  try {
    const deficit = stockRequired - stockAvailable;
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Draft a short, urgent emergency alert message.
      Type: ${type}. 
      Details: ${details}. 
      Current Need: ${stockRequired} units required.
      Current Stock: ${stockAvailable} available.
      Deficit: ${deficit} units missing.
      Hospital: ${config.hospitalName}. 
      Department: ${config.departmentName}.
      
      CRITICAL: You MUST include the specific numbers for units required and available in the message. 
      Keep it professional but urgent. Limit to 160 characters.`,
    });
    return response.text;
  } catch (error) {
    console.error("Draft error", error);
    return `EMERGENCY: ${type}. ${stockRequired} units needed, only ${stockAvailable} left. ${details}`;
  }
};

/**
 * Uses Google Maps to find nearby health resources based on user location.
 */
export const findNearbyResources = async (query: string, lat: number, lng: number) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      // Explicitly providing lat/lng in the prompt text ensures the model acknowledges the data is present
      contents: `I am at latitude ${lat.toFixed(5)} and longitude ${lng.toFixed(5)}. Using Google Maps tools, provide a list of the most relevant ${query} near me. For each, give a very brief 1-sentence description.`,
      config: {
        tools: [{ googleMaps: {} }],
        toolConfig: {
          retrievalConfig: {
            latLng: { latitude: lat, longitude: lng }
          }
        }
      },
    });
    return {
      text: response.text,
      chunks: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
    };
  } catch (error) {
    console.error("Maps error", error);
    return null;
  }
};

/**
 * TTS for reading health instructions aloud using Gemini TTS.
 */
export const speakInstruction = async (text: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: `Say clearly and slowly: ${text}` }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (base64Audio) {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      const audioBuffer = await decodeAudioData(
        decode(base64Audio),
        audioCtx,
        24000,
        1
      );
      const source = audioCtx.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioCtx.destination);
      source.start();
    }
  } catch (error) {
    console.error("TTS error", error);
  }
};
