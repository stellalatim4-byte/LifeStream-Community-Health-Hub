
import React, { useState, useEffect } from 'react';
import { findNearbyResources } from '../services/geminiService';

const NearbyReferrals: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleFindHelp = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const data = await findNearbyResources("public health clinics and blood centers", pos.coords.latitude, pos.coords.longitude);
      setResults(data);
      setLoading(false);
    }, () => {
      setLoading(false);
      alert("Please enable location to find local workers.");
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-green-100 p-2 rounded-lg text-green-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
        </div>
        <h3 className="font-bold text-slate-800">Local Support Network</h3>
      </div>
      
      {!results ? (
        <button 
          onClick={handleFindHelp}
          disabled={loading}
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
        >
          {loading ? "Searching..." : "Find Nearby Health Workers"}
        </button>
      ) : (
        <div className="space-y-3">
          <p className="text-sm text-slate-600 leading-relaxed">{results.text}</p>
          <div className="flex flex-wrap gap-2">
            {results.links?.map((chunk: any, i: number) => chunk.maps && (
              <a 
                key={i} 
                href={chunk.maps.uri} 
                target="_blank" 
                className="text-xs bg-slate-100 px-3 py-1.5 rounded-full text-blue-600 font-semibold hover:bg-blue-50"
              >
                View on Map
              </a>
            ))}
          </div>
          <button onClick={() => setResults(null)} className="text-xs text-slate-400 font-bold uppercase mt-2">Clear Search</button>
        </div>
      )}
    </div>
  );
};

export default NearbyReferrals;
