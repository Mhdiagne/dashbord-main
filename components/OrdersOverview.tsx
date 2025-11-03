'use client';

import React from 'react';

interface Order {
  id: number;
  icon: React.ReactNode;
  description: string;
  timestamp: string;
}

const orders: Order[] = [
  {
    id: 1,
    icon: (
      <div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center">
        <div className="w-3 h-3 bg-white rounded"></div>
      </div>
    ),
    description: '$2400, Design changes',
    timestamp: '22 DEC 7:20 PM',
  },
  {
    id: 2,
    icon: (
      <div className="w-8 h-8 rounded bg-purple-500 flex items-center justify-center">
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>
    ),
    description: 'New order #4219423',
    timestamp: '21 DEC 11:21 PM',
  },
  {
    id: 3,
    icon: (
      <div className="w-8 h-8 rounded bg-gray-500 flex items-center justify-center">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      </div>
    ),
    description: 'Server Payments for April',
    timestamp: '21 DEC 9:28 PM',
  },
  {
    id: 4,
    icon: (
      <div className="w-8 h-8 rounded bg-gray-500 flex items-center justify-center">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      </div>
    ),
    description: 'New card added for order #3210145',
    timestamp: '20 DEC 3:52 PM',
  },
  {
    id: 5,
    icon: (
      <div className="w-8 h-8 rounded bg-purple-500 flex items-center justify-center">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      </div>
    ),
    description: 'Unlock packages for Development',
    timestamp: '19 DEC 11:35 PM',
  },
  {
    id: 6,
    icon: (
      <div className="w-8 h-8 rounded bg-red-500 flex items-center justify-center text-white font-bold text-xs">
        Kd
      </div>
    ),
    description: 'New order #9851258',
    timestamp: '18 DEC 4:41 PM',
  },
];

const OrdersOverview: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Orders overview</h2>
        <p className="text-sm text-green-500 font-bold">+30% this month</p>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="flex items-start gap-3">
            {order.icon}
            <div className="flex-1">
              <p className="text-sm text-gray-800 font-medium">{order.description}</p>
              <p className="text-xs text-gray-400 mt-1">{order.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersOverview;

