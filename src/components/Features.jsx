import React from 'react';
import { MessageSquare, Calendar, Shield, Users, Brain, Layers } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Custom AI Agent Generator',
    desc: 'Create tailored agents in minutes. Define tone, goals, and qualification criteria.'
  },
  {
    icon: MessageSquare,
    title: 'Proactive Outreach',
    desc: 'Agents initiate conversations automatically and keep them moving until qualified.'
  },
  {
    icon: Users,
    title: 'Intelligent Lead Qualification',
    desc: 'Lead scoring tuned to your ICP, disqualification rules, and handoff when human touch is needed.'
  },
  {
    icon: Calendar,
    title: 'Automated Appointment Booking',
    desc: 'Built-in scheduling with Calendly and others — no back-and-forth.'
  },
  {
    icon: Layers,
    title: 'Multi-Campaign Management',
    desc: 'Run multiple campaigns with different agents and audiences simultaneously.'
  },
  {
    icon: Shield,
    title: 'WhatsApp Business API',
    desc: 'Enterprise-grade delivery, verified senders, and compliant messaging at scale.'
  },
];

export default function Features() {
  return (
    <section className="py-16" id="features">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need to qualify and book — on autopilot
            </h2>
            <p className="mt-4 text-slate-600">
              From first touch to booked meeting, WhatSetter automates your pipeline with human-like conversations.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 p-1 shadow-lg">
              <div className="rounded-2xl bg-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">Human-like conversations</h3>
                    <p className="mt-1 text-sm text-slate-600">Powered by advanced models with realistic typing delays and memory.</p>
                  </div>
                  <div className="h-10 w-10 rounded-lg" style={{ backgroundColor: '#25D366' }} />
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-slate-50 p-4">
                    <p className="text-sm text-slate-600">“Hey James! Saw you were checking out our coaching program. Can I ask a few quick questions to see if it’s a fit?”</p>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-4">
                    <p className="text-sm text-slate-600">“Great — based on your answers I can book a call this week. Does Wednesday 2 PM work?”</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-slate-50 p-6">
              <p className="text-sm font-medium text-slate-700">Built for</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  'Coaches & Consultants',
                  'E‑commerce',
                  'B2B/B2C Sales',
                  'Real Estate',
                  'SaaS',
                  'Marketing Agencies',
                ].map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
