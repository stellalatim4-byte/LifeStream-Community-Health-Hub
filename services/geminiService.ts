
import { GoogleGenAI, Modality } from "@google/genai";
import { AppConfig } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

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

// Fix: Moved 'deficit' calculation outside of the try block so it is accessible in the catch block
export const generateEmergencyDraft = async (
  type: string, 
  details: string, 
  config: AppConfig,
  stockRequired: number,
  stockAvailable: number
) => {
  const deficit = stockRequired - stockAvailable;
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Draft a high-priority, IHR 2005 compliant emergency alert.
      Context: ${config.hospitalName} ${config.departmentName}. 
      Type: ${type}. 
      Surgical Need: Orthopedic cases (Road accidents, childhood deformity corrections, joint replacements, bone cancers).
      Stats: ${stockRequired} units needed, ${stockAvailable} available (${deficit} deficit).
      
      RULES: 
      1. Reference IHR 2005 Public Health Emergency standards.
      2. Keep it under 160 chars for SMS compatibility.
      3. Focus on "Life-Saving Action Required".
      4. Professional yet urgent tone.`,
    });
    return response.text;
  } catch (error) {
    return `URGENT IHR ALERT: ${type}. ${deficit} blood units needed at ${config.hospitalName} Orthopedics. ${details}`;
  }
};

export const findNearbyResources = async (query: string, lat: number, lng: number) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `I am at latitude ${lat.toFixed(5)} and longitude ${lng.toFixed(5)}. Find ${query}. Mention how they support orthopedic trauma response if possible.`,
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
    return null;
  }
};

export const speakInstruction = async (text: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: `Say clearly: ${text}` }] }],
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
      const audioBuffer = await decodeAudioData(decode(base64Audio), audioCtx, 24000, 1);
      const source = audioCtx.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioCtx.destination);
      source.start();
    }
  } catch (error) {
    console.error("TTS error", error);
  }
};
