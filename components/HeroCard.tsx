'use client';

import React from 'react';

const HeroCard: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-row">
      <div className="flex flex-col justify-between gap-10">
        <div>
          <p className="text-xs text-gray-400 uppercase mb-2">Lorem ipsum</p>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Lorem Dashboard</h2>
          <p className="text-sm text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <a href="#" className="text-gray-500 hover:text-gray-700 font-medium flex items-center gap-1 text-sm transition-colors w-fit">
          Read more →
        </a>
      </div>
      
      <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-8 flex items-center justify-center shadow-sm">
      <div className="flex items-center gap-4">

        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
          </svg>
        </div>
        <span className="text-white text-4xl font-bold">chakra</span>
      </div>
    </div>
    </div>
  );
};

export default HeroCard;

