'use client';

import React from 'react';

type Project = {
  id: number;
  name: string;
  iconBg: string;
  budget: string;
  status: 'Working' | 'Canceled' | 'Done';
  completion: number;
};

const projects: Project[] = [
  { id: 1, name: 'Chakra Soft UI Version', iconBg: 'bg-pink-600', budget: '$14,000', status: 'Working', completion: 60 },
  { id: 2, name: 'Add Progress Track', iconBg: 'bg-blue-600', budget: '$3,000', status: 'Canceled', completion: 10 },
  { id: 3, name: 'Fix Platform Errors', iconBg: 'bg-orange-500', budget: 'Not set', status: 'Done', completion: 100 },
  { id: 4, name: 'Launch our Mobile App', iconBg: 'bg-blue-600', budget: '$32,000', status: 'Done', completion: 100 },
  { id: 5, name: 'Add the New Pricing Page', iconBg: 'bg-orange-500', budget: '$400', status: 'Working', completion: 25 },
];

const StatusText: React.FC<{ value: Project['status'] }> = ({ value }) => {
  const color =
    value === 'Working' ? 'text-gray-700' : value === 'Done' ? 'text-emerald-600' : 'text-gray-500';
  return <span className={`text-sm font-semibold ${color}`}>{value}</span>;
};

const ProjectsList: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-800">Projects</h2>
        <p className="text-sm text-gray-500">30 done this month</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-[11px] text-gray-500 uppercase tracking-wide">
              <th className="pb-3 font-semibold">Companies</th>
              <th className="pb-3 font-semibold">Budget</th>
              <th className="pb-3 font-semibold">Status</th>
              <th className="pb-3 font-semibold">Completion</th>
              <th className="pb-3"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.id} className="border-t border-gray-100">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded flex items-center justify-center text-white ${p.iconBg}`}>
                      <span className="text-xs font-bold">{p.name.split(' ')[0].slice(0,1)}</span>
                    </div>
                    <span className="text-sm text-gray-800 font-medium">{p.name}</span>
                  </div>
                </td>
                <td className="py-4 text-sm text-gray-600">{p.budget}</td>
                <td className="py-4"><StatusText value={p.status} /></td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-800">{p.completion}%</span>
                    <div className="w-40 bg-gray-100 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${p.status === 'Canceled' ? 'bg-gray-400' : 'bg-emerald-500'}`}
                        style={{ width: `${p.completion}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="py-4 text-right">
                  <a href="#" title="More actions" className="text-gray-500 hover:text-gray-800 inline-flex items-center gap-1">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/></svg>
                    <span className="text-xs">More</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsList;


