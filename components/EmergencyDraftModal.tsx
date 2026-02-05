
import React, { useState } from 'react';
import { generateEmergencyDraft } from '../services/geminiService';
import { AppConfig } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSend: (message: string) => void;
  config: AppConfig;
}

const EmergencyDraftModal: React.FC<Props> = ({ isOpen, onClose, onSend, config }) => {
  const [details, setDetails] = useState('');
  const [type, setType] = useState('Surgical Emergency');
  const [draft, setDraft] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const result = await generateEmergencyDraft(type, details, config);
    setDraft(result || '');
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-800">Launch Emergency Alert</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Alert Type</label>
            <select 
              className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blood-red outline-none"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option>Surgical Emergency</option>
              <option>Mass Casualty Event</option>
              <option>Epidemic Outbreak (IHR 2005)</option>
              <option>Critical Stock Level Reached</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Contextual Details</label>
            <textarea 
              className="w-full px-3 py-2 border border-slate-200 rounded-lg h-24 focus:ring-2 focus:ring-blood-red outline-none resize-none"
              placeholder={`e.g. Multiple trauma cases in ${config.departmentName}, urgent need for O+ units...`}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </div>

          <button 
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-slate-100 text-slate-700 py-2.5 rounded-lg font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-blood-red" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analyzing context...
              </span>
            ) : (
              <>
                <svg className="w-5 h-5 text-blood-red" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                Draft AI Message
              </>
            )}
          </button>

          {draft && (
            <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-lg animate-in fade-in slide-in-from-bottom-2 duration-300">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message Preview</label>
              <div className="text-sm text-slate-700 italic border-l-4 border-blood-red pl-3 py-1 bg-white rounded shadow-inner">
                "{draft}"
              </div>
            </div>
          )}
        </div>

        <div className="p-6 bg-slate-50 border-t border-slate-100 flex gap-3">
          <button 
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-slate-200 text-slate-600 rounded-lg font-semibold hover:bg-white transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={() => onSend(draft)}
            disabled={!draft}
            className="flex-1 px-4 py-2 bg-blood-red text-white rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg shadow-red-200 disabled:opacity-50"
          >
            Broadcast
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyDraftModal;
