'use client';

import React from 'react';

interface Project {
  id: number;
  companyIcon: React.ReactNode;
  name: string;
  members: number;
  budget: string;
  completion: number;
}

const projects: Project[] = [
  {
    id: 1,
    companyIcon: (
      <div className="w-8 h-8 rounded bg-purple-500 flex items-center justify-center text-white font-bold text-xs">
        Kd
      </div>
    ),
    name: 'Chakra Soft UI Version',
    members: 4,
    budget: '$14,000',
    completion: 60,
  },
  {
    id: 2,
    companyIcon: (
      <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center text-white font-bold text-xs">
        •
      </div>
    ),
    name: 'Add Progress Track',
    members: 3,
    budget: '$3,000',
    completion: 10,
  },
  {
    id: 3,
    companyIcon: (
      <div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center text-white font-bold text-xs">
        +
      </div>
    ),
    name: 'Fix Platform Errors',
    members: 2,
    budget: 'Not set',
    completion: 100,
  },
  {
    id: 4,
    companyIcon: (
      <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center text-white font-bold text-xs">
        •
      </div>
    ),
    name: 'Launch our Mobile App',
    members: 5,
    budget: '$32,000',
    completion: 100,
  },
  {
    id: 5,
    companyIcon: (
      <div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center text-white font-bold text-xs">
        +
      </div>
    ),
    name: 'Add the New Pricing Page',
    members: 2,
    budget: '$400',
    completion: 25,
  },
  {
    id: 6,
    companyIcon: (
      <div className="w-8 h-8 rounded bg-purple-500 flex items-center justify-center text-white font-bold text-xs">
        Kd
      </div>
    ),
    name: 'Redesign New Online Shop',
    members: 4,
    budget: '$7,600',
    completion: 40,
  },
];

const ProjectsTable: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Projects</h2>
        <p className="text-sm text-gray-500">30 done this month</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left pb-3 text-xs font-semibold text-gray-600 uppercase">COMPANIES</th>
              <th className="text-left pb-3 text-xs font-semibold text-gray-600 uppercase">MEMBERS</th>
              <th className="text-left pb-3 text-xs font-semibold text-gray-600 uppercase">BUDGET</th>
              <th className="text-left pb-3 text-xs font-semibold text-gray-600 uppercase">COMPLETION</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b border-gray-100">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    {project.companyIcon}
                    <span className="text-sm text-gray-800 font-medium">{project.name}</span>
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex -space-x-2">
                    {Array.from({ length: Math.min(project.members, 5) }).map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white"></div>
                    ))}
                  </div>
                </td>
                <td className="py-4 text-sm text-gray-600">{project.budget}</td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-800">{project.completion}%</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-2 max-w-[100px]">
                      <div 
                        className="bg-teal-500 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${project.completion}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsTable;

