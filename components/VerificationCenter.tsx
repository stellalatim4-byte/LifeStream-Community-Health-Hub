
import React from 'react';
import { VERIFIED_YOUTH } from '../constants';

const VerificationCenter: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100 bg-indigo-900 text-white">
        <h3 className="font-black text-sm uppercase tracking-widest">Verification Center</h3>
        <p className="text-[10px] text-indigo-300 font-bold uppercase mt-1">VC-Ready Talent Pipeline</p>
      </div>
      
      <div className="p-6 space-y-4">
        {VERIFIED_YOUTH.map(youth => (
          <div key={youth.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-black">
              {youth.studentName.charAt(0)}
            </div>
            <div className="flex-1 overflow-hidden">
              <h4 className="text-xs font-black text-slate-900 truncate">{youth.studentName}</h4>
              <p className="text-[9px] font-bold text-slate-400 truncate uppercase">{youth.institution}</p>
              <div className="mt-1.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                <span className="text-[9px] font-black text-green-600 uppercase tracking-tighter">Investment Readiness Certified</span>
              </div>
            </div>
            <div className="shrink-0">
               <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                 <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.64.3 1.241.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
               </svg>
            </div>
          </div>
        ))}
        
        <button className="w-full py-3 bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-slate-200 transition-all border border-dashed border-slate-300">
          Request Bulk Verification
        </button>
      </div>
    </div>
  );
};

export default VerificationCenter;
