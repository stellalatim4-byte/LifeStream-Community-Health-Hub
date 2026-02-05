
import React from 'react';
import { AppConfig } from '../types';

interface Props {
  config: AppConfig;
  onOpenSettings: () => void;
}

const DashboardHeader: React.FC<Props> = ({ config, onOpenSettings }) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-3">
            <div className="bg-blood-red p-2 rounded-lg cursor-pointer" onClick={onOpenSettings}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.642.321a6 6 0 01-3.86.517l-2.388-.477a2 2 0 00-1.022.547l-1.168 1.168a2 2 0 001.235 3.414l9.746 1.392a2 2 0 002.109-1.235l1.168-1.168z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 leading-tight">LifeStream</h1>
              <p className="text-xs text-slate-500 font-medium">{config.hospitalName} | {config.departmentName}</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-1.5"></span>
              {config.healthAuthority} Verified
            </span>
            <div className="text-right flex items-center gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">{config.adminName}</p>
                <p className="text-xs text-slate-500">{config.adminRole}</p>
              </div>
              <button 
                onClick={onOpenSettings}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all"
                title="System Configuration"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
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
