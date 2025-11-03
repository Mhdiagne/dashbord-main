'use client';

import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, isPositive, icon }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-600 mb-2">{title}</p>
          <h3 className="text-3xl font-bold text-gray-800 mb-2">{value}</h3>
          <div className="flex items-center gap-1">
            <span className={`text-sm font-semibold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {change}
            </span>
          </div>
        </div>
        <div className="bg-teal-100 rounded-lg p-3 flex-shrink-0">
          <div className="text-teal-600">
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;

