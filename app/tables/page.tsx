'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import TopNav from '@/components/TopNav';
import AuthorsTable from '@/components/AuthorsTable';
import ProjectsList from '@/components/ProjectsList';

export default function TablesPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-[200px]">
        <TopNav breadcrumbs={["Pages", "Tables"]} current="Tables" />
        <main className="p-8 pb-0">
          <div className="space-y-6">
            <AuthorsTable />
            <ProjectsList />
          </div>
        </main>
      </div>
    </div>
  );
}


