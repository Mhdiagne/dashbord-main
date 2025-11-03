'use client';

import React from 'react';

const InfoCard: React.FC = () => {
  return (
    <div className="relative bg-center bg-cover bg-no-repeat bg-[url('/pexels-ivan-samkov-7213201.jpg')] rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-row items-center">
      <div className="absolute inset-0 bg-black/40 rounded-2xl" />

      <div className="relative z-10 flex flex-col justify-between gap-10 text-white">
        <div>
          <p className="text-xs text-gray-200 uppercase mb-2">Lorem ipsum</p>
          <p className="text-sm text-gray-100 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div>
          <a href="#" className="text-gray-200 hover:text-white font-medium flex items-center gap-1 text-sm transition-colors w-fit">
            Read more →
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default InfoCard;
