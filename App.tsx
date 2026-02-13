
import React, { useState, useEffect, useMemo } from 'react';
import DashboardHeader from './components/DashboardHeader';
import HumanSecuritySection from './components/HumanSecuritySection';
import NutritionalSecurityTracker from './components/NutritionalSecurityTracker';
import LaborResilienceTracker from './components/LaborResilienceTracker';
import ImpactRevenueModule from './components/ImpactRevenueModule';
import VerificationCenter from './components/VerificationCenter';
import NearbyReferrals from './components/NearbyReferrals';
import EmergencyDraftModal from './components/EmergencyDraftModal';
import ConfigModal from './components/ConfigModal';
import CommunityCTA from './components/CommunityCTA';
import CopyrightSection from './components/CopyrightSection';
import Acknowledgements from './components/Acknowledgements';
import MulagoOrthopedicAnalytics from './components/MulagoOrthopedicAnalytics';
import DonorManager from './components/DonorManager';
import { AppConfig } from './types';
import { DEFAULT_CONFIG, MOCK_SURGERY_DATA } from './constants';

const App: React.FC = () => {
  const [config, setConfig] = useState<AppConfig>(DEFAULT_CONFIG);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [lastSync, setLastSync] = useState(new Date());

  const currentStockInfo = useMemo(() => {
    const latest = MOCK_SURGERY_DATA[MOCK_SURGERY_DATA.length - 1];
    return {
      available: latest.bloodUnitsAvailable,
      required: latest.bloodUnitsRequired,
      percentage: Math.round((latest.bloodUnitsAvailable / latest.bloodUnitsRequired) * 100)
    };
  }, []);

  const toggleConfig = (key: keyof AppConfig) => {
    setConfig(prev => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    const interval = setInterval(() => setLastSync(new Date()), 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-300 ${config.isDiscreetMode ? 'bg-zinc-100 text-zinc-900 grayscale' : 'bg-slate-50 text-slate-900'}`}>
      <DashboardHeader config={config} onOpenSettings={() => setIsConfigModalOpen(true)} />
      
      <div className="bg-white border-b border-slate-200 py-2 sticky top-16 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="flex bg-slate-100 p-1 rounded-lg">
              <button onClick={() => toggleConfig('isSimpleLanguage')} className={`text-[9px] font-black uppercase px-3 py-1 rounded-md transition-all ${config.isSimpleLanguage ? 'bg-blue-600 text-white' : 'text-slate-500'}`}>Human Centered</button>
              <button onClick={() => !config.isSimpleLanguage} className={`text-[9px] font-black uppercase px-3 py-1 rounded-md transition-all ${!config.isSimpleLanguage ? 'bg-slate-800 text-white' : 'text-slate-500'}`}>IHR Standard</button>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Global Node Active: {config.region}</span>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        
        {/* Coordination & High-Impact Alert Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          <div className="lg:col-span-8 bg-slate-900 p-8 md:p-10 rounded-3xl shadow-2xl text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Mulago Replication Model • IHR 2005</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 leading-tight">Integrated Global Alert & Follow-up</h2>
              <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mb-10 leading-relaxed">
                Empowering the Orthopedic Department with real-time ICT solutions for surgical demand, road accidents, and public health emergencies.
              </p>
              
              <div className="flex flex-wrap gap-5 items-center">
                <button onClick={() => setIsAlertModalOpen(true)} className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-blue-700 transition-all flex items-center gap-3 shadow-2xl shadow-blue-500/40 transform hover:-translate-y-1">
                  Launch Global Alert
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </button>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] bg-white/5 px-6 py-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                  Daily Resilience Demand: <span className="text-red-400">8-12 Major Surgeries</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 group-hover:bg-red-100 rounded-bl-[40px] -mr-6 -mt-6 transition-colors duration-500"></div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Surgical Readiness</p>
              <h3 className="text-4xl font-black text-slate-900 tracking-tighter">{currentStockInfo.available} Units</h3>
              <div className="mt-6 h-3 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-red-500 rounded-full transition-all duration-1000" 
                  style={{ width: `${currentStockInfo.percentage}%` }}
                ></div>
              </div>
              <p className="text-[10px] text-red-500 mt-3 font-black uppercase tracking-widest">{currentStockInfo.percentage}% Capacity Reached</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Human Connectivity Registry</p>
              <h3 className="text-4xl font-black text-slate-900 tracking-tighter">{MOCK_SURGERY_DATA[0].bloodUnitsRequired}+ Ready</h3>
              <p className="text-[10px] text-blue-500 mt-3 font-black uppercase tracking-widest">Global Follow-up Node Sync Active</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
          <div className="lg:col-span-8 space-y-10">
            <MulagoOrthopedicAnalytics />
            <DonorManager />
            <LaborResilienceTracker />
            <ImpactRevenueModule />
          </div>

          <div className="lg:col-span-4 space-y-10">
            <HumanSecuritySection />
            <NutritionalSecurityTracker />
            <NearbyReferrals />
            <VerificationCenter />
          </div>
        </div>
      </main>

      <Acknowledgements />
      <CommunityCTA />
      <CopyrightSection />

      <EmergencyDraftModal isOpen={isAlertModalOpen} onClose={() => setIsAlertModalOpen(false)} onSend={() => {}} config={config} currentAvailable={currentStockInfo.available} currentRequired={currentStockInfo.required} />
      <ConfigModal isOpen={isConfigModalOpen} onClose={() => setIsConfigModalOpen(false)} config={config} onSave={setConfig} />
    </div>
  );
};

export default App;
