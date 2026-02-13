
import React from 'react';
import { FIES_DATA } from '../constants';

const NutritionalSecurityTracker: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
      <div className="p-6 border-b border-slate-100 bg-slate-50/50">
        <h3 className="font-black text-slate-900 text-sm uppercase tracking-widest leading-tight">Nutritional Security (FIES)</h3>
        <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Household Experience Scale</p>
      </div>
      
      <div className="p-6 space-y-6 flex-grow">
        <div className="flex items-center justify-between gap-2 mb-2">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Experience Metric</p>
          <span className="shrink-0 text-[10px] font-black text-red-500 bg-red-50 px-2 py-0.5 rounded whitespace-nowrap">46% Nat. Baseline</span>
        </div>
        
        <div className="space-y-5">
          {FIES_DATA.map((item, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex justify-between items-start gap-4">
                <span className="text-[10px] font-black text-slate-700 uppercase tracking-tighter leading-tight break-words flex-1">
                  {item.metric}
                </span>
                <span className="text-xs font-black text-slate-900 shrink-0">
                  {item.value}%
                </span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ${item.value > 40 ? 'bg-red-500' : 'bg-blue-500'}`}
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-slate-100 mt-4">
           <div className="bg-blue-50 p-4 rounded-xl">
             <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest mb-1.5">Target Action</p>
             <p className="text-[10px] font-bold text-blue-800 leading-normal">
               Deploy value-addition machinery to households scoring above 40% in "Ran out of Food" categories to ensure immediate caloric stability.
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionalSecurityTracker;
