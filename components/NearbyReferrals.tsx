
import React, { useState, useEffect } from 'react';
import { findNearbyResources } from '../services/geminiService';

const NearbyReferrals: React.FC = () => {
  const [isLocationOn, setIsLocationOn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<{ text: string; chunks: any[] } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const performSearch = async (lat: number, lng: number) => {
    setLoading(true);
    setError(null);
    try {
      const data = await findNearbyResources("hospitals, public health clinics, and blood donation centers", lat, lng);
      setResults(data);
    } catch (err) {
      setError("Failed to fetch nearby resources. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleLocation = () => {
    if (!isLocationOn) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setIsLocationOn(true);
          performSearch(pos.coords.latitude, pos.coords.longitude);
        },
        (err) => {
          setLoading(false);
          setIsLocationOn(false);
          setError("Location access denied. Please enable it in your browser settings.");
        }
      );
    } else {
      setIsLocationOn(false);
      setResults(null);
      setError(null);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/30">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg transition-colors ${isLocationOn ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-slate-800">Regional Support Network</h3>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Automated Detection</p>
          </div>
        </div>
        
        <button 
          onClick={toggleLocation}
          className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ring-offset-2 focus:ring-2 focus:ring-blue-500 ${isLocationOn ? 'bg-blue-600' : 'bg-slate-200'}`}
        >
          <span className="sr-only">Toggle Location</span>
          <span
            aria-hidden="true"
            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isLocationOn ? 'translate-x-5' : 'translate-x-0'}`}
          />
        </button>
      </div>
      
      <div className="p-6">
        {loading && !results && (
          <div className="text-center py-12 flex flex-col items-center gap-4">
             <svg className="animate-spin h-8 w-8 text-blue-600" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="text-sm font-bold text-slate-500 animate-pulse uppercase tracking-widest">Detecting nearby facilities...</p>
          </div>
        )}

        {!isLocationOn && !loading && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
               <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
               </svg>
            </div>
            <p className="text-sm text-slate-500 font-medium mb-2">Location Detection Off</p>
            <p className="text-xs text-slate-400 max-w-[200px] mx-auto mb-6 leading-relaxed">Turn on the location toggle to automatically discover nearby health centers and blood donation points.</p>
            <button 
              onClick={toggleLocation}
              className="text-xs font-black text-blue-600 uppercase tracking-widest hover:bg-blue-50 px-4 py-2 rounded-lg transition-all"
            >
              Enable Live Search
            </button>
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-50 border border-red-100 rounded-xl mb-4 animate-in fade-in duration-300">
            <p className="text-xs text-red-700 font-bold flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
              {error}
            </p>
          </div>
        )}

        {isLocationOn && results && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 mb-4">
              <p className="text-xs text-blue-800 font-medium leading-relaxed italic">
                "{results.text.substring(0, 150)}..."
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Local Health Assets</h4>
              {results.chunks.length > 0 ? (
                results.chunks.filter((chunk: any) => chunk.maps).map((chunk: any, i: number) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-slate-50 border border-slate-100 rounded-xl hover:border-blue-200 hover:bg-white transition-all group">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-8 h-8 shrink-0 rounded-full bg-white border border-slate-100 flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-xs font-bold text-slate-900 leading-tight truncate mb-0.5">
                          {chunk.maps.title || "Health Center"}
                        </p>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter truncate">
                          Nearby Facility
                        </p>
                      </div>
                    </div>
                    <a 
                      href={chunk.maps.uri} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="shrink-0 px-3 py-1.5 bg-white border border-slate-200 text-blue-600 rounded-lg text-[10px] font-black uppercase tracking-wider hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm ml-2"
                    >
                      Locate
                    </a>
                  </div>
                ))
              ) : (
                <div className="text-center py-6 border-2 border-dashed border-slate-100 rounded-2xl">
                   <p className="text-xs font-bold text-slate-400">Scanning for specific regional names...</p>
                </div>
              )}
            </div>
            
            <div className="pt-4 mt-2 border-t border-slate-100 flex justify-between items-center">
               <p className="text-[8px] text-slate-300 font-black uppercase tracking-widest">Powered by Gemini 2.5 Flash</p>
               <button 
                  onClick={() => {
                    setResults(null);
                    navigator.geolocation.getCurrentPosition(pos => performSearch(pos.coords.latitude, pos.coords.longitude));
                  }} 
                  className="text-[9px] font-black text-blue-600 uppercase tracking-widest hover:underline"
                >
                  Refresh Feed
               </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NearbyReferrals;
