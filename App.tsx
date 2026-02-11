
import React, { useState, useEffect, useMemo } from 'react';
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
import { DEFAULT_CONFIG, MOCK_SURGERY_DATA } from './constants';

const App: React.FC = () => {
  const [config, setConfig] = useState<AppConfig>(DEFAULT_CONFIG);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [lastSync, setLastSync] = useState(new Date());
  const [recentAlerts, setRecentAlerts] = useState<string[]>([]);

  // Calculate "Real-time" stock from the mock data
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

  const handleBroadcast = (message: string) => {
    // Add to local feed for immediate feedback
    setRecentAlerts(prev => [message, ...prev].slice(0, 5));
    setIsAlertModalOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLastSync(new Date());
    }, 15000);
    return () => clearInterval(interval);
  }, []);

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
              <span className="text-[10px] font-bold text-slate-400 uppercase">
                {config.offlineMode ? 'Local Storage Only' : `Live Sync: ${lastSync.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}`}
              </span>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-700">
        
        {/* Urgent Action & Literacy Card (Global Health Coordination Hub) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden group border border-blue-400/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/20 rounded-full -ml-10 -mb-10 blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-200">System Live & Monitoring</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-2">
                {config.isSimpleLanguage ? "Hello! How can we help?" : "Global Health Coordination Hub"}
              </h2>
              <p className="text-blue-100 text-lg font-medium max-w-lg mb-8 leading-relaxed opacity-90">
                {config.isSimpleLanguage 
                  ? "Check on your patients, find helpers nearby, or send an urgent message to save lives today." 
                  : "Localized response system with real-time donor tracking and patient continuity metrics."}
              </p>
              
              <div className="flex flex-wrap gap-4 items-center">
                <button 
                  onClick={() => setIsAlertModalOpen(true)}
                  className="bg-white text-blue-800 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] active:scale-95 transition-all flex items-center gap-2"
                >
                  {config.isSimpleLanguage ? "Ask for Helpers" : "Launch AI Alert"}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </button>
                
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-[10px] font-black text-blue-300 uppercase tracking-widest bg-white/5 px-4 py-2 rounded-xl border border-white/10 backdrop-blur-sm">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    Operational Status: Active
                  </div>
                </div>
              </div>

              {/* Real-time Ticker */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-6 overflow-hidden">
                 <div className="flex items-center gap-2 shrink-0">
                   <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                   <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">Pulse Feed</span>
                 </div>
                 <div className="animate-marquee whitespace-nowrap flex gap-12 text-xs font-medium text-blue-100/70">
                   {recentAlerts.map((alert, idx) => (
                     <span key={`user-${idx}`} className="text-white font-bold bg-white/10 px-2 rounded">
                       USER BROADCAST: {alert}
                     </span>
                   ))}
                   <span>Monitoring O+ Stock Levels in {config.region}...</span>
                   <span>Available: {currentStockInfo.available} | Required: {currentStockInfo.required}...</span>
                   <span>Donor Follow-up automation active...</span>
                   <span>Patient Continuity score: 94%...</span>
                 </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-red-50 rounded-bl-3xl -mr-4 -mt-4 opacity-50"></div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Blood Stock Status</p>
              <h3 className="text-2xl font-black text-slate-900">{currentStockInfo.available} Units Left</h3>
              <div className="mt-4 h-3 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-red-500 rounded-full animate-pulse transition-all duration-1000" 
                  style={{ width: `${currentStockInfo.percentage}%` }}
                ></div>
              </div>
              <p className="text-xs text-red-500 mt-2 font-bold uppercase tracking-tighter">
                {currentStockInfo.percentage}% Capacity (Need: {currentStockInfo.required})
              </p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex-1 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-bl-3xl -mr-4 -mt-4 opacity-50"></div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Human Helpers</p>
              <h3 className="text-2xl font-black text-slate-900">4 Active Workers</h3>
              <div className="mt-3 flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-[10px] font-black text-white shadow-sm ring-2 ring-blue-50">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-400">+2</div>
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

      <EmergencyDraftModal 
        isOpen={isAlertModalOpen} 
        onClose={() => setIsAlertModalOpen(false)} 
        onSend={handleBroadcast} 
        config={config} 
        currentAvailable={currentStockInfo.available}
        currentRequired={currentStockInfo.required}
      />
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

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </div>
  );
};

export default App;
