
import React from 'react';
import { FIES_DATA } from '../constants';

const NutritionalSecurityTracker: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100 bg-slate-50/50">
        <h3 className="font-black text-slate-900 text-sm uppercase tracking-widest">Nutritional Security (FIES)</h3>
        <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Household Experience Scale</p>
      </div>
      
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-bold text-slate-500">Benchmark Tracker</p>
          <span className="text-[10px] font-black text-red-500 bg-red-50 px-2 py-0.5 rounded">46% National Baseline</span>
        </div>
        
        <div className="space-y-4">
          {FIES_DATA.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-tighter">
                <span className="text-slate-700">{item.metric}</span>
                <span className="text-slate-900">{item.value}%</span>
              </div>
              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ${item.value > 40 ? 'bg-red-500' : 'bg-blue-500'}`}
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-100">
           <div className="bg-blue-50 p-3 rounded-xl">
             <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest mb-1">Target Action</p>
             <p className="text-[10px] font-medium text-blue-800 leading-relaxed">
               Deploy value-addition machinery to households scoring &gt;40% in "Ran out of Food" to stabilize calories.
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionalSecurityTracker;
