
import React from 'react';
import { AppConfig } from '../types';

interface Props {
  config: AppConfig;
  onOpenSettings: () => void;
}

const DashboardHeader: React.FC<Props> = ({ config, onOpenSettings }) => {
  return (
    <header className="bg-slate-900 border-b border-white/10 sticky top-0 z-30 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-xl cursor-pointer shadow-lg shadow-blue-500/20" onClick={onOpenSettings}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04m18.236 0a11.958 11.958 0 00-2.015-4.551A11.956 11.956 0 0012 2.944a11.956 11.956 0 00-5.385 1.449a11.958 11.958 0 00-2.015 4.551m18.236 0A11.956 11.956 0 0112 21.056a11.956 11.956 0 01-8.618-3.04m18.236 0a11.958 11.958 0 01-2.015 4.551A11.956 11.956 0 0112 21.056a11.956 11.956 0 01-5.385-1.449" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-black text-white leading-tight tracking-tight">ResilienceHub</h1>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{config.region} • HUMAN SECURITY</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest">
              VC-Ready Certified
            </span>
            <div className="text-right flex items-center gap-4 border-l border-white/10 pl-6">
              <div>
                <p className="text-sm font-black text-white">{config.adminName}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{config.adminRole}</p>
              </div>
              <button 
                onClick={onOpenSettings}
                className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
