'use client';

import React from 'react';

type Author = {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  status: 'Online' | 'Offline';
  employedAt: string;
};

const authors: Author[] = [
  {
    id: 1,
    name: 'Esthera Jackson',
    email: 'esthera@simmmple.com',
    role: 'Manager',
    department: 'Organization',
    status: 'Online',
    employedAt: '14/06/21',
  },
  {
    id: 2,
    name: 'Alexa Liras',
    email: 'alexa@simmmple.com',
    role: 'Programmer',
    department: 'Developer',
    status: 'Offline',
    employedAt: '14/06/21',
  },
  {
    id: 3,
    name: 'Laurent Michael',
    email: 'laurent@simmmple.com',
    role: 'Executive',
    department: 'Projects',
    status: 'Online',
    employedAt: '14/06/21',
  },
  {
    id: 4,
    name: 'Fredduardo Hill',
    email: 'fredduardo@simmmple.com',
    role: 'Manager',
    department: 'Organization',
    status: 'Online',
    employedAt: '14/06/21',
  },
  {
    id: 5,
    name: 'Daniel Thomas',
    email: 'daniel@simmmple.com',
    role: 'Programmer',
    department: 'Developer',
    status: 'Offline',
    employedAt: '14/06/21',
  },
  {
    id: 6,
    name: 'Mark Wilson',
    email: 'mark@simmmple.com',
    role: 'Designer',
    department: 'UI/UX Design',
    status: 'Offline',
    employedAt: '14/06/21',
  },
];

function getInitials(name: string): string {
  const parts = name.split(' ').filter(Boolean);
  return parts.slice(0, 2).map(p => p[0]).join('').toUpperCase();
}

const StatusBadge: React.FC<{ status: Author['status'] }> = ({ status }) => (
  <span
    className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
      status === 'Online'
        ? 'bg-emerald-100 text-emerald-600'
        : 'bg-gray-200 text-gray-600'
    }`}
  >
    {status}
  </span>
);

const AuthorsTable: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Authors Table</h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-[11px] text-gray-500 uppercase tracking-wide">
              <th className="pb-3 font-semibold">Author</th>
              <th className="pb-3 font-semibold">Function</th>
              <th className="pb-3 font-semibold">Status</th>
              <th className="pb-3 font-semibold">Employed</th>
              <th className="pb-3"></th>
            </tr>
          </thead>
          <tbody>
            {authors.map((a) => (
              <tr key={a.id} className="border-t border-gray-100">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 text-xs font-bold">
                      {getInitials(a.name)}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-800">{a.name}</span>
                      <span className="text-xs text-gray-500">{a.email}</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 align-top">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-800">{a.role}</span>
                    <span className="text-xs text-gray-500">{a.department}</span>
                  </div>
                </td>
                <td className="py-4"><StatusBadge status={a.status} /></td>
                <td className="py-4 text-sm text-gray-700">{a.employedAt}</td>
                <td className="py-4 text-right">
                  <button className="text-xs text-gray-500 hover:text-gray-800 font-semibold">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuthorsTable;


