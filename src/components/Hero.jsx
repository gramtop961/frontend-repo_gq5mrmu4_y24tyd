import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-sm font-medium">Proactive WhatsApp AI Agents</span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              WhatSetter
              <span className="block text-slate-600">AI that starts the conversation.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-7 text-slate-600">
              Stop waiting for leads to message you. WhatSetter's AI agents reach out first on WhatsApp, qualify prospects 24/7, and book appointments automatically.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#get-demo"
                className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
              >
                Get a live demo
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-md px-5 py-3 text-base font-semibold text-slate-800 ring-1 ring-slate-200 transition hover:bg-slate-50"
              >
                See how it works
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#25D366' }} />
                WhatsApp Business API ready
              </div>
              <div>Multi-language: EN / FR / ES / DE / IT / PT</div>
            </div>
          </div>

          {/* Spline Scene */}
          <div className="relative h-[420px] w-full md:h-[520px]">
            <div className="absolute inset-0 rounded-xl ring-1 ring-slate-100">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            {/* subtle gradient overlay to improve contrast */}
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-white/0 via-white/0 to-white/20" />
          </div>
        </div>
      </div>

      {/* background accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 hidden h-72 w-72 -translate-x-1/2 rounded-full blur-3xl md:block" style={{ background: 'radial-gradient(closest-side, rgba(79,70,229,0.25), transparent 70%)' }} />
    </section>
  );
}
