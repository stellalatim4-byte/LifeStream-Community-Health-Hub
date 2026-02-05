
import React, { useState, useEffect } from 'react';
import DashboardHeader from './components/DashboardHeader';
import BloodStockChart from './components/BloodStockChart';
import DonorManager from './components/DonorManager';
import HealthJourney from './components/HealthJourney';
import NearbyReferrals from './components/NearbyReferrals';
import EmergencyDraftModal from './components/EmergencyDraftModal';
import ConfigModal from './components/ConfigModal';
import CommunityCTA from './components/CommunityCTA';
import CopyrightSection from './components/CopyrightSection';
import Acknowledgements from './components/Acknowledgements';
import { AppConfig } from './types';
import { DEFAULT_CONFIG } from './constants';

const App: React.FC = () => {
  const [config, setConfig] = useState<AppConfig>(DEFAULT_CONFIG);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);

  const toggleConfig = (key: keyof AppConfig) => {
    setConfig(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${config.isDiscreetMode ? 'bg-zinc-100 text-zinc-900 grayscale' : 'bg-slate-50 text-slate-900'}`}>
      <DashboardHeader config={config} onOpenSettings={() => setIsConfigModalOpen(true)} />
      
      {/* Connectivity & Literacy Bar */}
      <div className="bg-white border-b border-slate-200 py-2 sticky top-16 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => toggleConfig('isSimpleLanguage')}
              className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full transition-all border ${config.isSimpleLanguage ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-400 border-slate-200'}`}
            >
              Simple Mode
            </button>
            <button 
              onClick={() => toggleConfig('isDiscreetMode')}
              className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full transition-all border ${config.isDiscreetMode ? 'bg-zinc-800 text-white border-zinc-800' : 'bg-white text-slate-400 border-slate-200'}`}
            >
              Discreet Mode
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${config.offlineMode ? 'bg-amber-400' : 'bg-green-500 animate-pulse'}`}></span>
              <span className="text-[10px] font-bold text-slate-400 uppercase">{config.offlineMode ? 'Local Only' : 'Live Sync'}</span>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-700">
        
        {/* Urgent Action & Literacy Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-black tracking-tight mb-2">
                {config.isSimpleLanguage ? "Hello! How can we help?" : "Global Health Coordination Hub"}
              </h2>
              <p className="text-blue-100 text-lg font-medium max-w-lg mb-6 leading-relaxed">
                {config.isSimpleLanguage 
                  ? "Check on your patients, find helpers nearby, or send an urgent message to save lives today." 
                  : "Localized response system with real-time donor tracking and patient continuity metrics."}
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => setIsAlertModalOpen(true)}
                  className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:shadow-lg active:scale-95 transition-all"
                >
                  {config.isSimpleLanguage ? "Ask for Helpers" : "Launch AI Alert"}
                </button>
                <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-blue-200 uppercase tracking-widest bg-white/10 px-4 py-2 rounded-xl border border-white/20">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  System Active
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex-1">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Stock Status</p>
              <h3 className="text-2xl font-black text-slate-900">12 Units Left</h3>
              <div className="mt-4 h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 w-1/2 rounded-full"></div>
              </div>
              <p className="text-xs text-slate-500 mt-2 font-medium">Re-order threshold: 5 units</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex-1">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Human Helpers</p>
              <h3 className="text-2xl font-black text-slate-900">4 Active Workers</h3>
              <div className="mt-2 flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">W</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <HealthJourney config={config} />
            <DonorManager />
          </div>

          <div className="space-y-8">
            <NearbyReferrals />
            <BloodStockChart />
          </div>
        </div>
      </main>

      <Acknowledgements />
      <CommunityCTA />
      <CopyrightSection />

      <EmergencyDraftModal isOpen={isAlertModalOpen} onClose={() => setIsAlertModalOpen(false)} onSend={() => setIsAlertModalOpen(false)} config={config} />
      <ConfigModal isOpen={isConfigModalOpen} onClose={() => setIsConfigModalOpen(false)} config={config} onSave={setConfig} />

      <footer className="bg-slate-50 border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            IHR 2005 Global Patient Continuity Framework
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs text-slate-400 font-bold uppercase tracking-widest">
            <button className="hover:text-blue-600 transition-colors">Privacy Control</button>
            <button className="hover:text-blue-600 transition-colors">Human Rights Policy</button>
            <button className="hover:text-blue-600 transition-colors">Contact Health Authority</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
