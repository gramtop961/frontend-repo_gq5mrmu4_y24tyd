import React from 'react';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple top bar */}
      <header className="sticky top-0 z-20 w-full border-b border-slate-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg" style={{ backgroundColor: '#25D366' }} />
            <span className="text-lg font-bold tracking-tight text-slate-900">WhatSetter</span>
          </div>
          <div className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#value" className="hover:text-slate-900">Why WhatSetter</a>
            <a href="#get-demo" className="hover:text-slate-900">Pricing</a>
            <a href="#" className="rounded-md border border-slate-200 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-50">Sign in</a>
            <a href="#get-demo" className="rounded-md bg-emerald-500 px-3 py-1.5 font-medium text-white hover:bg-emerald-600">Get a demo</a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <ValueProps />
        <Features />
        <CTA />
      </main>

      <footer className="border-t border-slate-100 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} WhatSetter. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="#" className="hover:text-slate-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
