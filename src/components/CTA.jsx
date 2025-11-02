import React from 'react';
import { Check } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-16" id="get-demo">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-900 p-1 shadow-xl">
          <div className="relative flex flex-col items-start justify-between gap-8 rounded-2xl bg-white/5 p-8 md:flex-row md:p-10">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-semibold tracking-tight text-white">Fill your pipeline while you sleep</h3>
              <p className="mt-3 text-slate-200">
                Launch a proactive WhatsApp agent that qualifies leads and books meetings on autopilot.
              </p>
              <ul className="mt-6 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
                {[
                  'Set up in under 30 minutes',
                  'Calendly integration included',
                  'Enterprise-grade WhatsApp API',
                  'Role-based team access',
                ].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                      <Check className="h-3 w-3" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex w-full max-w-sm flex-col items-stretch gap-3 md:w-auto">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Book a free strategy call
              </a>
              <p className="text-center text-xs text-slate-300">No credit card required</p>
            </div>
          </div>
        </div>
      </div>

      {/* decorative glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-64 w-[36rem] -translate-x-1/2 rounded-full blur-3xl" style={{ background: 'radial-gradient(closest-side, rgba(16,185,129,0.25), transparent 70%)' }} />
    </section>
  );
}
