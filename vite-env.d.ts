/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Clock, MapPin, Phone, CheckCircle, Navigation, Copy, ExternalLink, RefreshCw } from 'lucide-react';
import { OPENING_HOURS, CONTACT_INFO } from '../data/menu';

export default function InfoSection() {
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<'clondalkin' | 'tallaght' | 'ballyfermot'>('clondalkin');

  const copyAddress = () => {
    navigator.clipboard.writeText(CONTACT_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(CONTACT_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  // Check today's day to highlight in UI
  const todayName = new Date().toLocaleDateString('en-IE', { weekday: 'long' });

  // Route calculation simulation for the custom map
  const routeDirections = {
    clondalkin: { time: "4-6 mins", dist: "1.9 km", path: "Straight down Orchard Rd onwards to St Patrick's Rd." },
    tallaght: { time: "12-14 mins", dist: "5.4 km", path: "Via Belgard Rd/R113. Follow signs into Clondalkin village." },
    ballyfermot: { time: "11-13 mins", dist: "4.8 km", path: "Via Coldcut Rd/R833 onto Orchard Rd." }
  };

  return (
    <section className="py-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Opening hours & Quick facts */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Opening hours card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-xs">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-5.5 h-5.5 text-amber-500" />
                <h3 className="text-lg font-black text-gray-900 tracking-tight">Opening Hours</h3>
              </div>

              <div className="space-y-3 font-semibold text-xs transition-all decoration-none">
                {OPENING_HOURS.map((hour) => {
                  const isToday = hour.day.toLowerCase() === todayName.toLowerCase();
                  return (
                    <div
                      key={hour.day}
                      className={`flex justify-between items-center p-3 rounded-lg border leading-none ${
                        isToday
                          ? 'bg-amber-50 border-amber-300 text-amber-950 font-black'
                          : 'bg-white border-transparent text-gray-700'
                      }`}
                    >
                      <span>{hour.day}</span>
                      <div className="flex items-center gap-2">
                        <span>{hour.openTime} - {hour.closeTime}</span>
                        {isToday && (
                          <span className="bg-amber-500 text-slate-950 px-2 py-0.5 rounded-sm text-[9px] font-black uppercase">
                            Today
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Contact & Dial Cards */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-xs space-y-4">
              
              <div className="flex items-center gap-2">
                <Phone className="w-5.5 h-5.5 text-amber-500" />
                <h3 className="text-lg font-black text-gray-900 tracking-tight">Speak to Us</h3>
              </div>

              <div className="p-3 bg-gray-50 rounded-xl flex items-center justify-between border border-gray-100">
                <div className="leading-none">
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Landline Phone</p>
                  <p className="text-sm font-extrabold text-gray-900">{CONTACT_INFO.phoneDisplay}</p>
                </div>
                <div className="flex gap-1.5">
                  <button
                    onClick={copyPhone}
                    className="p-2 bg-white hover:bg-amber-100 border border-gray-100 rounded-lg text-gray-500 hover:text-amber-700 transition-colors"
                    title="Copy phone"
                  >
                    {copiedPhone ? <CheckCircle className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="p-2 bg-amber-500 hover:bg-amber-600 rounded-lg text-slate-950 font-bold transition-transform"
                    title="Call Now"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-xl flex items-center justify-between border border-gray-100">
                <div className="leading-none">
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Street Address</p>
                  <p className="text-xs font-extrabold text-gray-900 line-clamp-1">{CONTACT_INFO.address}</p>
                </div>
                <button
                  onClick={copyAddress}
                  className="p-2 bg-white hover:bg-amber-100 border border-gray-100 rounded-lg text-gray-500 hover:text-amber-700 transition-colors"
                  title="Copy address"
                >
                  {copied ? <CheckCircle className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

            </div>

          </div>

          {/* Interactive Simulated Map */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-100 p-6 shadow-xs space-y-6">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Navigation className="w-5.5 h-5.5 text-amber-500" />
                <h3 className="text-lg font-black text-gray-900 tracking-tight">Our Dublin Village Spot</h3>
              </div>
              <span className="text-xs font-bold text-gray-400">Dublin 22 Area Code</span>
            </div>

            {/* Custom SVG/CSS Simulated Interactive Map */}
            <div className="relative h-72 md:h-80 w-full rounded-xl bg-slate-100 border border-gray-150 overflow-hidden flex items-center justify-center">
              
              {/* Map background grid lines */}
              <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1px)] [background-size:16px_16px] opacity-100" />
              
              {/* Radius delivery circle rings */}
              <div className="absolute w-[240px] h-[240px] rounded-full border border-dashed border-amber-300 bg-amber-50/10 animate-pulseScale" />
              <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-gray-200" />

              {/* Major Streets / simulated blocks */}
              <div className="absolute left-10 right-10 top-1/3 h-5 bg-white rounded-full border border-gray-200/60 rotate-2 flex items-center px-4">
                <span className="text-[9px] font-black text-slate-300 tracking-wider">M7 HIGHWAY</span>
              </div>
              <div className="absolute left-1/4 top-10 bottom-10 w-5 bg-white rounded-full border border-gray-200/60 -rotate-12 flex items-center justify-center">
                <span className="text-[9px] font-black text-slate-300 tracking-wider rotate-90">R113 ROAD</span>
              </div>
              <div className="absolute left-10 right-1/4 bottom-1/4 h-5 bg-white rounded-full border border-gray-200/60 rotate-6 flex items-center px-4">
                <span className="text-[9px] font-black text-slate-300 tracking-wider">ST PATRICKS ROAD</span>
              </div>

              {/* Interactive Route Vector lines based on active route */}
              {selectedRoute === 'clondalkin' && (
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                  <path d="M 120 230 Q 180 200, 260 170" fill="transparent" stroke="#f59e0b" strokeWidth="4" strokeDasharray="6" className="animate-[dash_2s_linear_infinite]" />
                </svg>
              )}
              {selectedRoute === 'tallaght' && (
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                  <path d="M 80 80 Q 140 120, 260 170" fill="transparent" stroke="#f59e0b" strokeWidth="4" strokeDasharray="6" className="animate-[dash_2s_linear_infinite]" />
                </svg>
              )}
              {selectedRoute === 'ballyfermot' && (
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                  <path d="M 380 90 Q 320 120, 260 170" fill="transparent" stroke="#f59e0b" strokeWidth="4" strokeDasharray="6" className="animate-[dash_2s_linear_infinite]" />
                </svg>
              )}

              {/* Takeaway Pin (The 9th Lough Coords center!) */}
              <div className="absolute left-[260px] top-[170px] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                <div className="bg-slate-900 border-2 border-amber-400 text-amber-400 font-extrabold text-[9px] px-2 py-1.5 rounded-lg shadow-lg flex items-center gap-1">
                  <MapPin className="w-3 h-3 fill-amber-400 text-slate-950 animate-bounce" />
                  <span>The 9th Lough</span>
                </div>
                <div className="w-2.5 h-2.5 bg-amber-400 rounded-full border border-white ring-4 ring-amber-100" />
              </div>

              {/* Start Nodes of neighborhoods */}
              <div className="absolute left-20 bottom-12 z-20 flex flex-col items-center">
                <div className="bg-white/90 backdrop-blur-xs border border-gray-200 px-2 py-1 rounded-sm text-[9px] font-bold text-gray-600 shadow-xs">
                  Clondalkin Park
                </div>
              </div>
              <div className="absolute left-10 top-16 z-20 flex flex-col items-center">
                <div className="bg-white/90 backdrop-blur-xs border border-gray-200 px-2 py-1 rounded-sm text-[9px] font-bold text-gray-600 shadow-xs">
                  Tallaght (Belgard)
                </div>
              </div>
              <div className="absolute right-12 top-20 z-20 flex flex-col items-center">
                <div className="bg-white/90 backdrop-blur-xs border border-gray-200 px-2 py-1 rounded-sm text-[9px] font-bold text-gray-600 shadow-xs">
                  Ballyfermot Hill
                </div>
              </div>

            </div>

            {/* Neighborhood Direction selectors */}
            <div className="space-y-4">
              <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest border-b border-gray-100 pb-1">
                Directions Calculator
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {(['clondalkin', 'tallaght', 'ballyfermot'] as const).map((route) => (
                  <button
                    key={route}
                    onClick={() => setSelectedRoute(route)}
                    className={`py-2 px-3 rounded-lg text-center font-bold text-[10px] uppercase tracking-wider border transition-all ${
                      selectedRoute === route
                        ? 'bg-slate-900 text-white border-slate-950 shadow-xs'
                        : 'bg-gray-50 text-gray-500 hover:bg-gray-100 border-gray-200'
                    }`}
                  >
                    {route}
                  </button>
                ))}
              </div>

              {/* Route directions message panel */}
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1.5 font-semibold text-xs animate-in fade-in duration-150">
                <div className="flex items-center justify-between text-slate-800">
                  <span className="flex items-center gap-1">
                    <Navigation className="w-3.5 h-3.5 text-amber-500" />
                    Estimated time of delivery/arrival:
                  </span>
                  <span className="font-extrabold text-amber-600">{routeDirections[selectedRoute].time} ({routeDirections[selectedRoute].dist})</span>
                </div>
                <p className="text-[11px] text-gray-500 leading-normal">{routeDirections[selectedRoute].path}</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
