
import React from 'react';

const CopyrightSection: React.FC = () => {
  return (
    <section className="bg-white py-12 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-50 rounded-full mb-6 border border-slate-100">
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04m18.236 0a11.958 11.958 0 00-2.015-4.551A11.956 11.956 0 0012 2.944a11.956 11.956 0 00-5.385 1.449 11.958 11.958 0 00-2.015 4.551m18.236 0A11.956 11.956 0 0112 21.056a11.956 11.956 0 01-8.618-3.04m18.236 0a11.958 11.958 0 01-2.015 4.551A11.956 11.956 0 0112 21.056a11.956 11.956 0 01-5.385-1.449 11.958 11.958 0 01-2.015-4.551" />
          </svg>
        </div>
        
        <h4 className="text-slate-800 font-bold text-base mb-3 tracking-tight">
          © 2026 Intercultural Development Agency (IDA). All rights reserved.
        </h4>
        
        <p className="text-slate-500 text-sm leading-relaxed italic max-w-2xl mx-auto">
          This app is provided free of charge. Its content, design, and software may not be reproduced, modified, redistributed, or used for commercial purposes without prior written permission.
        </p>
        
        <div className="mt-8 flex justify-center gap-6">
          <div className="h-px w-8 bg-slate-200"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">Official Portal</span>
          <div className="h-px w-8 bg-slate-200"></div>
        </div>
      </div>
    </section>
  );
};

export default CopyrightSection;
