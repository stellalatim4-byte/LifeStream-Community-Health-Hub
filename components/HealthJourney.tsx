
import React from 'react';
import { HealthReferral, AppConfig } from '../types';
import { MOCK_REFERRALS } from '../constants';
import { speakInstruction } from '../services/geminiService';

interface Props {
  config: AppConfig;
}

const HealthJourney: React.FC<Props> = ({ config }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
        <div>
          <h2 className="text-lg font-bold text-slate-800">
            {config.isSimpleLanguage ? "Your Health Steps" : "Patient Continuity Tracker"}
          </h2>
          <p className="text-xs text-slate-500 font-medium">Verified by local Health Authority</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span>
          Synced
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        {MOCK_REFERRALS.map((ref) => (
          <div key={ref.id} className="p-4 rounded-xl border border-slate-100 bg-white hover:border-blue-200 transition-all group">
            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <span className="font-bold text-slate-400">{ref.assignedWorker.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 leading-tight">
                    {config.isDiscreetMode ? ref.discreetName : ref.conditionName}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">Managed by {ref.assignedWorker}</p>
                  
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Next:</span>
                    <span className="text-sm font-semibold text-blue-600">{ref.nextStep}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => speakInstruction(ref.nextStep)}
                  className="p-2 bg-slate-50 text-slate-400 hover:text-blue-600 rounded-full transition-colors"
                  title="Listen to instruction"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                </button>
                <a 
                  href={`tel:${ref.workerPhone || '00000000'}`}
                  className="p-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthJourney;
