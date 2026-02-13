
import React from 'react';
import { VERIFIED_YOUTH } from '../constants';

const VerificationCenter: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
      <div className="p-6 border-b border-slate-100 bg-indigo-900 text-white">
        <h3 className="font-black text-sm uppercase tracking-widest leading-tight">Verification Center</h3>
        <p className="text-[10px] text-indigo-300 font-bold uppercase mt-1 tracking-wider">IHR Emergency Training Talent Node</p>
      </div>
      
      <div className="p-6 space-y-4">
        {VERIFIED_YOUTH.map(youth => (
          <div key={youth.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-black shadow-inner">
                {youth.studentName.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-black text-slate-900 leading-tight whitespace-normal break-words">{youth.studentName}</h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight mt-1 leading-snug break-words">{youth.institution}</p>
              </div>
              <div className="shrink-0">
                 <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                   <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.64.3 1.241.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                 </svg>
              </div>
            </div>
            
            <div className="bg-white/60 p-2.5 rounded-xl border border-indigo-50 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full shrink-0"></span>
              <span className="text-[10px] font-black text-indigo-800 uppercase tracking-tighter leading-tight break-words">
                Investment Readiness Node Certified
              </span>
            </div>
          </div>
        ))}
        
        <button className="w-full py-3.5 bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-slate-200 transition-all border border-dashed border-slate-300">
          Request Node Auth
        </button>
      </div>
    </div>
  );
};

export default VerificationCenter;
