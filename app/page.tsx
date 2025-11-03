'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import TopNav from '@/components/TopNav';
import StatCard from '@/components/StatCard';
import HeroCard from '@/components/HeroCard';
import InfoCard from '@/components/InfoCard';
import ProjectsTable from '@/components/ProjectsTable';
import OrdersOverview from '@/components/OrdersOverview';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 ml-[200px]">
        <TopNav />

        <main className="p-8 pb-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard
              title="Today's Money"
              value="$53,000"
              change="+55%"
              isPositive={true}
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              }
            />
            <StatCard
              title="Today's Users"
              value="2,300"
              change="+5%"
              isPositive={true}
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
            />
            <StatCard
              title="New Clients"
              value="+3,052"
              change="-14%"
              isPositive={false}
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
            />
            <StatCard
              title="Total Sales"
              value="$173,000"
              change="+8%"
              isPositive={true}
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              }
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <HeroCard />
              <InfoCard />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ProjectsTable />
            <OrdersOverview />
          </div>
        </main>

        <footer className="p-4 border-t border-gray-200 bg-white">
          <div className="flex justify-end gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-gray-600 transition-colors">Creative Tim</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Sigmmento</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Blog</a>
            <a href="#" className="hover:text-gray-600 transition-colors">License</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

