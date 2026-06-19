/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ShoppingBag, Clock, Phone, MapPin, Menu, X } from 'lucide-react';
import { CartItem } from '../types';
import { CONTACT_INFO } from '../data/menu';
import logoImg from '../assets/images/takeaway_logo_1781889054589.jpg';

interface HeaderProps {
  cart: CartItem[];
  onOpenCart: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  activeOrderCount: number;
}

export default function Header({
  cart,
  onOpenCart,
  activeTab,
  setActiveTab,
  activeOrderCount
}: HeaderProps) {
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [timeText, setTimeText] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check opening status based on Dublin / browser time (4:30 PM to 10:00 PM)
  useEffect(() => {
    function checkOpenStatus() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentMinutes = hours * 60 + minutes;

      const openMinutes = 16 * 60 + 30; // 16:30
      const closeMinutes = 22 * 60;     // 22:00

      if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
        setIsOpenNow(true);
        const diff = closeMinutes - currentMinutes;
        const remainingHours = Math.floor(diff / 60);
        const remainingMins = diff % 60;
        setTimeText(`Open now! Closes in ${remainingHours > 0 ? `${remainingHours}h ` : ''}${remainingMins}m`);
      } else {
        setIsOpenNow(false);
        if (currentMinutes < openMinutes) {
          const diff = openMinutes - currentMinutes;
          const remainingHours = Math.floor(diff / 60);
          const remainingMins = diff % 60;
          setTimeText(`Closed. Opens in ${remainingHours > 0 ? `${remainingHours}h ` : ''}${remainingMins}m`);
        } else {
          setTimeText(`Closed. Opens tomorrow at 4:30 PM`);
        }
      }
    }

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  const totalCartQty = cart.reduce((total, item) => total + item.quantity, 0);

  const tabs = [
    { id: 'menu', label: 'Order Online' },
    { id: 'tracker', label: `Track Order ${activeOrderCount > 0 ? `(${activeOrderCount})` : ''}` },
    { id: 'reviews', label: 'Reviews' },
    { id: 'info', label: 'Find Us' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('menu')}>
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-amber-400 bg-amber-50 flex items-center justify-center shrink-0">
              <img
                src={logoImg}
                alt="The 9th Lough Emblem"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image fails or hasn't built
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=100&q=80";
                }}
              />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-gray-900 leading-none">
                The 9th Lough
              </h1>
              <p className="text-xs font-medium text-amber-600 mt-1 uppercase tracking-wider">
                Authentic Takeaway & Chipper
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                id={`nav-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Indicators & Right UI */}
          <div className="flex items-center gap-4">
            
            {/* Live Opening Indicator */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200">
              <span className={`relative flex h-2 w-2`}>
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpenNow ? 'bg-emerald-400' : 'bg-rose-400'}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isOpenNow ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
              </span>
              <span className="text-xs font-semibold text-gray-700">
                {timeText}
              </span>
            </div>

            {/* Phone Quick Call */}
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700 bg-amber-50 hover:bg-amber-100/80 border border-amber-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>Call {CONTACT_INFO.phoneDisplay}</span>
            </a>

            {/* Shopping Cart Button */}
            <button
              id="header-cart-button"
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-slate-900 text-white hover:bg-amber-500 transition-all duration-200 shadow-md group focus:outline-hidden"
              aria-label="Open Shopping Cart"
            >
              <ShoppingBag className="w-5.5 h-5.5 group-hover:scale-105 transition-transform" />
              {totalCartQty > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-black text-white ring-2 ring-white animate-pulse">
                  {totalCartQty}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-2 shadow-inner">
          <div className="flex items-center justify-between px-2 py-1 mb-2">
            <div className="flex items-center gap-2">
              <span className={`h-2.5 w-2.5 rounded-full ${isOpenNow ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
              <span className="text-xs font-bold text-gray-600">{timeText}</span>
            </div>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="text-xs font-bold text-amber-600 flex items-center gap-1"
            >
              <Phone className="w-3" /> Dial {CONTACT_INFO.phoneDisplay}
            </a>
          </div>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                activeTab === tab.id
                  ? 'bg-amber-500 text-white'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
