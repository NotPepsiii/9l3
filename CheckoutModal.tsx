/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  category: string;
  allergens?: string[];
  isOutOfStock?: boolean;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export type OrderStatus = 'pending' | 'preparing' | 'on_the_way' | 'delivered' | 'cancelled';

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  timestamp: string;
  type: 'delivery' | 'collection';
  customerName: string;
  customerPhone: string;
  customerAddress?: string;
  deliveryFee: number;
  estimatedDeliveryTime: number; // in minutes
  notes?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  source: string;
  timeAgo: string;
  content: string;
}

export interface OpeningHour {
  day: string;
  openTime: string;
  closeTime: string;
}
