/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Plus, Info, AlertTriangle, Check, X, RotateCcw } from 'lucide-react';
import { MenuItem, CartItem } from '../types';
import { MENU_ITEMS, CATEGORIES, ALLERGENS } from '../data/menu';
import heroBanner from '../assets/images/hero_banner_1781889070556.jpg';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, quantity: number, instructions?: string) => void;
}

export default function MenuSection({ onAddToCart }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Party Deals");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Customization modal state
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);
  const [qty, setQty] = useState(1);
  const [instructions, setInstructions] = useState("");

  // Allergy helper: toggle allergen filters
  const toggleAllergenFilter = (allergen: string) => {
    if (selectedAllergens.includes(allergen)) {
      setSelectedAllergens(selectedAllergens.filter(a => a !== allergen));
    } else {
      setSelectedAllergens([...selectedAllergens, allergen]);
    }
  };

  const resetFilters = () => {
    setSelectedAllergens([]);
    setSearchQuery("");
  };

  // Filter menu items by Category, Search Query, and Allergen exclusions (hide if item has excluded allergen)
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // 1. Search filter
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
      
      if (!matchesSearch) return false;

      // 2. Allergen exclusions: If user selects an allergen, they want to EXCLUDE items containing it
      if (selectedAllergens.length > 0) {
        const itemAllergens = item.allergens || [];
        const hasExcludedAllergen = selectedAllergens.some((allergen) =>
          itemAllergens.map(a => a.toLowerCase()).includes(allergen.toLowerCase())
        );
        if (hasExcludedAllergen) return false;
      }

      // 3. Category filter (skip if searching across the entire menu)
      if (searchQuery.trim() === "") {
        return item.category === selectedCategory;
      }

      return true;
    });
  }, [selectedCategory, searchQuery, selectedAllergens]);

  // Handle opening customization modal
  const handleItemClick = (item: MenuItem) => {
    if (item.isOutOfStock) return;
    setCustomizingItem(item);
    setQty(1);
    setInstructions("");
  };

  // Submit customized item to cart
  const handleConfirmAdd = () => {
    if (customizingItem) {
      onAddToCart(customizingItem, qty, instructions);
      setCustomizingItem(null);
    }
  };

  return (
    <section className="py-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic Marketing Banner with Food Hero */}
        <div className="relative mb-10 rounded-2xl overflow-hidden shadow-lg bg-slate-900 text-white border border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10" />
          <img
            src={heroBanner}
            alt="Delicious Takeaway Food Banner"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover opacity-65"
            onError={(e) => {
              // Fallback photo
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1000&q=80";
            }}
          />
          <div className="relative z-20 px-6 py-12 md:py-20 md:px-12 max-w-2xl flex flex-col justify-center">
            <span className="inline-block bg-amber-500 text-slate-950 font-extrabold text-xs uppercase px-3 py-1 rounded-full mb-4 self-start tracking-widest shadow-xs">
              Traditional Irish Chipper
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-3">
              Serving the Finest Grab in Clondalkin
            </h2>
            <p className="text-sm md:text-base text-gray-200 mb-6 font-medium leading-relaxed">
              Double-cooked fresh chips, dynamic beef stacks, southern fried chicken, and our legendary signature specials box straight to your door.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-semibold">
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg">
                <Check className="w-4 h-4 text-amber-400" /> Rapid Clondalkin Delivery (€3.50)
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg">
                <Check className="w-4 h-4 text-amber-400" /> Free Delivery over €50
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls Panel */}
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-xs border border-gray-100 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search pizzas, burgers, chips, cod, and sauces..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 font-medium text-gray-950 placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 font-bold p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filter Toggle & Allergen Controls */}
            <div className="flex gap-2">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border text-sm font-semibold transition-all ${
                  selectedAllergens.length > 0 || isFilterOpen
                    ? 'bg-amber-100/50 border-amber-300 text-amber-800'
                    : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Allergens ({selectedAllergens.length})</span>
              </button>

              {(searchQuery || selectedAllergens.length > 0) && (
                <button
                  onClick={resetFilters}
                  className="flex items-center justify-center gap-1.5 px-3 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-bold transition-colors"
                  title="Reset all filters"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span className="hidden sm:inline">Reset</span>
                </button>
              )}
            </div>

          </div>

          {/* Allergen Filters Panel */}
          {isFilterOpen && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                <Info className="w-3.5 h-3.5 text-amber-500" />
                Select Allergens you wish to EXCLUDE:
              </p>
              <div className="flex flex-wrap gap-2">
                {ALLERGENS.map((allergen) => {
                  const isExcluded = selectedAllergens.includes(allergen);
                  return (
                    <button
                      key={allergen}
                      onClick={() => toggleAllergenFilter(allergen)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1 ${
                        isExcluded
                          ? 'bg-rose-500 text-white shadow-xs scale-98'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-transparent'
                      }`}
                    >
                      {allergen}
                      {isExcluded && <X className="w-3 h-3 ml-1" />}
                    </button>
                  );
                })}
              </div>
              <p className="text-[11px] text-gray-400 mt-2 italic">
                Items labeled with the checked allergens will be safely hidden. Always let our kitchen team know of any severe food allergies in the order notes!
              </p>
            </div>
          )}
        </div>

        {/* Infinite Layout Grid: Category Sidebar + Menu Listing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sticky Category Menu List */}
          {searchQuery.trim() === "" && (
            <div className="lg:col-span-3 lg:sticky lg:top-24 max-h-[calc(100vh-140px)] overflow-y-auto pr-2 flex lg:flex-col gap-2 scrollbar-none pb-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-3 rounded-lg text-sm text-left font-bold tracking-tight shrink-0 transition-all duration-150 ${
                    selectedCategory === category
                      ? 'bg-amber-500 text-slate-950 shadow-xs border-l-4 border-slate-950 translate-x-1'
                      : 'bg-white hover:bg-gray-50 text-gray-700 border-l-4 border-transparent'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          {/* Corrected Content Grid */}
          <div className={`${searchQuery.trim() === "" ? 'lg:col-span-9' : 'lg:col-span-12'}`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                {searchQuery.trim() !== "" ? "Search Results" : selectedCategory}
                <span className="text-sm font-semibold text-gray-400 ml-2">
                  ({filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'})
                </span>
              </h3>
              {selectedAllergens.length > 0 && (
                <span className="text-xs bg-rose-50 text-rose-700 font-semibold px-2 py-1 rounded-sm border border-rose-100">
                  Filtering Out Allergens
                </span>
              )}
            </div>

            {filteredItems.length === 0 ? (
              <div className="text-center bg-white border border-gray-100 rounded-2xl p-12 shadow-xs">
                <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-gray-900 mb-1">No yummy items found</h4>
                <p className="text-sm text-gray-500">
                  Try clearing some allergen tags or widening your search tags.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-4 px-4 py-2 bg-amber-500 text-slate-950 font-bold rounded-lg text-xs hover:bg-amber-600 transition-colors"
                >
                  Clear All Filters & Show All
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    className={`bg-white rounded-xl border p-4 flex flex-col justify-between transition-all group ${
                      item.isOutOfStock 
                        ? 'border-gray-100 opacity-60 cursor-not-allowed'
                        : 'border-slate-100 hover:shadow-md hover:border-amber-200 cursor-pointer'
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-start gap-4 mb-1.5">
                        <h4 className="font-bold text-gray-950 text-base group-hover:text-amber-600 transition-colors">
                          {item.name}
                        </h4>
                        <span className="font-black text-slate-900 shrink-0 text-base">
                          €{item.price.toFixed(2)}
                        </span>
                      </div>
                      
                      {item.description && (
                        <p className="text-xs text-gray-500 font-medium leading-relaxed mb-3 line-clamp-2">
                          {item.description}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
                      {/* Allergen indicators */}
                      <div className="flex flex-wrap gap-1">
                        {item.allergens && item.allergens.length > 0 ? (
                          item.allergens.map((allergen) => (
                            <span
                              key={allergen}
                              className="text-[9px] bg-slate-100 text-slate-600 font-extrabold px-1.5 py-0.5 rounded-sm"
                            >
                              {allergen}
                            </span>
                          ))
                        ) : (
                          <span className="text-[9px] text-gray-300 font-semibold italic">Safe/Allergen-free</span>
                        )}
                      </div>

                      {/* Add Button */}
                      {item.isOutOfStock ? (
                        <span className="text-xs font-black text-rose-500 bg-rose-50 px-2 py-1 rounded-lg">
                          Out Of Stock
                        </span>
                      ) : (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleItemClick(item);
                          }}
                          className="flex items-center gap-1 text-xs font-bold text-amber-900 bg-amber-400 hover:bg-slate-950 hover:text-white px-3 py-1.5 rounded-lg transition-colors group-hover:scale-102"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Elegant Item Customizer Modal Overlay */}
      {customizingItem && (
        <div className="fixed inset-0 bg-slate-950/65 flex items-center justify-center p-4 z-50 backdrop-blur-xs leading-none">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            
            {/* Modal Header */}
            <div className="bg-amber-400 p-6 flex justify-between items-start text-slate-950">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest bg-white/30 text-amber-950 px-2.5 py-1 rounded-full">
                  {customizingItem.category}
                </span>
                <h3 className="text-xl font-black tracking-tight mt-2">{customizingItem.name}</h3>
                <p className="text-sm font-extrabold mt-1">€{customizingItem.price.toFixed(2)} each</p>
              </div>
              <button
                onClick={() => setCustomizingItem(null)}
                className="bg-white/20 hover:bg-white/40 p-1.5 rounded-full transition-colors"
                aria-label="Close Customizer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {customizingItem.description && (
                <div className="mb-4">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Details</h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-semibold">{customizingItem.description}</p>
                </div>
              )}

              {/* Allergen Note */}
              <div className="mb-6 p-3 bg-amber-50/50 rounded-lg border border-amber-100 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs text-gray-600 font-semibold leading-relaxed">
                  {customizingItem.allergens && customizingItem.allergens.length > 0 ? (
                    <span>Contains default allergens: <strong className="text-amber-800">{customizingItem.allergens.join(", ")}</strong>.</span>
                  ) : (
                    <span>Allergen checks: This dish does not list default allergens.</span>
                  )}
                </div>
              </div>

              {/* Special instructions */}
              <div className="mb-6">
                <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-2">
                  Special Instructions / Requests
                </label>
                <textarea
                  rows={2}
                  placeholder="E.g., Salt & Vinegar please, sauce on the side, no lettuce..."
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 text-sm font-semibold placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                />
              </div>

              {/* Quantity selectors */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="p-3 hover:bg-gray-50 text-gray-600 active:bg-gray-100 transition-colors font-black text-lg focus:outline-hidden"
                  >
                    -
                  </button>
                  <span className="px-5 font-bold text-gray-900 text-sm select-none">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="p-3 hover:bg-gray-50 text-gray-600 active:bg-gray-100 transition-colors font-black text-lg focus:outline-hidden"
                  >
                    +
                  </button>
                </div>

                <div className="text-right">
                  <p className="text-xs font-bold text-gray-400">Total Price</p>
                  <p className="text-2xl font-black text-slate-900">
                    €{(customizingItem.price * qty).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 p-6 flex gap-3 border-t border-gray-100">
              <button
                onClick={() => setCustomizingItem(null)}
                className="flex-1 py-3 text-sm font-bold text-gray-700 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200 bg-white"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmAdd}
                className="flex-[2] py-3 text-sm font-black text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-lg transition-all text-center"
              >
                Add {qty} to Basket • €{(customizingItem.price * qty).toFixed(2)}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
