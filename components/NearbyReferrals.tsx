
import React, { useState } from 'react';
import { findNearbyResources } from '../services/geminiService';

const NearbyReferrals: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<{ text: string; chunks: any[] } | null>(null);

  const handleFindHelp = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const data = await findNearbyResources("hospitals, public health clinics, and blood donation centers", pos.coords.latitude, pos.coords.longitude);
      setResults(data);
      setLoading(false);
    }, () => {
      setLoading(false);
      alert("Please enable location to find local facilities.");
    });
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-green-100 p-2 rounded-lg text-green-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <h3 className="font-bold text-slate-800">Local Support Network</h3>
        </div>
        {results && (
          <button 
            onClick={() => setResults(null)} 
            className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-600"
          >
            Reset
          </button>
        )}
      </div>
      
      <div className="p-6">
        {!results ? (
          <div className="text-center py-4">
            <p className="text-sm text-slate-500 mb-6">Access a verified list of clinics and blood centers in your immediate vicinity.</p>
            <button 
              onClick={handleFindHelp}
              disabled={loading}
              className="w-full relative group overflow-hidden py-4 bg-blue-600 text-white rounded-xl font-black text-sm uppercase tracking-wider hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-100"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Syncing Coordinates...
                </>
              ) : (
                <>
                  Find Nearby Health Centers
                  <svg className="w-4 h-4 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </div>
        ) : (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 mb-6">
              <p className="text-xs text-blue-800 font-medium leading-relaxed italic">
                "{results.text.substring(0, 150)}..."
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Verified Facilities</h4>
              {results.chunks.length > 0 ? (
                results.chunks.map((chunk: any, i: number) => chunk.maps && (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-blue-200 hover:bg-white transition-all group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 leading-none mb-1">Facility {i + 1}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Verified Health Resource</p>
                      </div>
                    </div>
                    <a 
                      href={chunk.maps.uri} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white border border-slate-200 text-blue-600 rounded-lg text-xs font-black uppercase tracking-wider hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
                    >
                      Maps
                    </a>
                  </div>
                ))
              ) : (
                <div className="text-center py-6 border-2 border-dashed border-slate-100 rounded-2xl">
                   <p className="text-xs font-bold text-slate-400">Searching within immediate radius...</p>
                </div>
              )}
            </div>
            
            <p className="text-[9px] text-slate-400 font-medium text-center mt-4">
              Real-time data provided by Google Maps Grounding via Gemini 2.5 Flash
            </p>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(3px); }
        }
        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
      `}} />
    </div>
  );
};

export default NearbyReferrals;
