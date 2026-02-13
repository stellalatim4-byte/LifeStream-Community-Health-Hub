
import React from 'react';
import { REVENUE_STREAMS } from '../constants';

const ImpactRevenueModule: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="font-black text-slate-900 text-xl tracking-tight">Impact Fund Revenue-Share</h3>
          <p className="text-xs text-slate-500 font-medium">Tracking machinery service fees for revolving capital fund.</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase">VC-Ready Viability</p>
        </div>
      </div>

      <div className="space-y-4">
        {REVENUE_STREAMS.map(stream => {
          const progress = Math.min((stream.totalFees / stream.targetFees) * 100, 100);
          return (
            <div key={stream.id} className="p-6 rounded-2xl border border-slate-100 bg-slate-50/30">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h4 className="font-black text-slate-900 text-sm uppercase">{stream.assetName}</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Service Fee Generated: ${stream.totalFees}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-black text-green-600">Reinvesting {stream.reinvestmentRate}%</span>
                </div>
              </div>
              
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 rounded-full transition-all duration-1000" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between mt-2">
                <p className="text-[9px] font-black text-slate-400 uppercase">Viability Target: ${stream.targetFees}</p>
                <p className="text-[9px] font-black text-blue-600 uppercase">{Math.round(progress)}% of Target</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-4 bg-slate-900 rounded-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Aggregate Fund Pool</p>
            <p className="text-lg font-black text-white">$14,200 <span className="text-xs text-green-400">Ready for Re-Deployment</span></p>
          </div>
        </div>
        <button className="px-4 py-2 bg-white text-slate-900 text-[10px] font-black uppercase rounded-xl hover:bg-slate-100 transition-all">Export ROI Report</button>
      </div>
    </div>
  );
};

export default ImpactRevenueModule;
