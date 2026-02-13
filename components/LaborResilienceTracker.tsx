
import React from 'react';

const LaborResilienceTracker: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
      <div className="flex justify-between items-end mb-8">
        <div>
          <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-2">Resilience Tracker</p>
          <h3 className="font-black text-slate-900 text-2xl tracking-tight">Labor Supply Resilience</h3>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-black text-slate-400 uppercase">Resilience Score</p>
          <p className="text-xl font-black text-slate-900">84/100</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-blue-200 transition-all">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
            </div>
            <div>
              <h4 className="font-black text-slate-900 text-sm uppercase">Maternal Health Access</h4>
              <p className="text-xs font-bold text-slate-400">92% Coverage</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed font-medium">
            Stabilizing the core agricultural labor force through proactive clinical continuity. Lower maternal health access correlates with a 15% drop in seasonal harvest labor.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-blue-200 transition-all">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <div>
              <h4 className="font-black text-slate-900 text-sm uppercase">Youth Engagement (Idle)</h4>
              <p className="text-xs font-bold text-slate-400">18.2% Potential</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed font-medium">
            Tracking youth "idle" rates to identify capacity for investment-readiness training in smart farming and grain processing operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LaborResilienceTracker;
