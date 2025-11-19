import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ClientDataTable = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const clients = [
    { id: 1, clientName: 'James Carter', company: 'Granite Solutions', phone: '+1 202 555 0143', status: 'Approved', date: '11-02-2025', amount: '$100' },
    { id: 2, clientName: 'James Carter', company: 'Granite Solutions', phone: '+1 202 555 0143', status: 'Rejected', date: '11-02-2025', amount: '$100' },
    { id: 3, clientName: 'James Carter', company: 'Granite Solutions', phone: '+1 202 555 0143', status: 'Approved', date: '11-02-2025', amount: '$100' },
    { id: 4, clientName: 'James Carter', company: 'Granite Solutions', phone: '+1 202 555 0143', status: 'Rejected', date: '11-02-2025', amount: '$100' },
    { id: 5, clientName: 'James Carter', company: 'Granite Solutions', phone: '+1 202 555 0143', status: 'Approved', date: '11-02-2025', amount: '$100' },
    { id: 6, clientName: 'James Carter', company: 'Granite Solutions', phone: '+1 202 555 0143', status: 'Rejected', date: '11-02-2025', amount: '$100' },
    { id: 7, clientName: 'James Carter', company: 'Granite Solutions', phone: '+1 202 555 0143', status: 'Approved', date: '11-02-2025', amount: '$100' }
  ];

  return (
    <div className="w-full min-h-screen  p-4 sm:p-6 lg:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Table Container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-bold ">Client Name</th>
                  <th className="px-6 py-4 text-left text-sm font-bold ">Company name</th>
                  <th className="px-6 py-4 text-left text-sm font-bold ">Phone Number</th>
                  <th className="px-6 py-4 text-left text-sm font-bold ">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-bold ">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-bold ">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {clients.map((client) => (
                  <tr key={client.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-700">{client.clientName}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{client.company}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{client.phone}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1.5 rounded-[10px] text-[8px] font-bold ${
                        client.status === 'Approved' 
                          ? 'bg-[#E4F4EA] text-[#4E866C] border border-[#C6ECC4]' 
                          : 'bg-[#FEE0D9] text-[#BE4242] border border-[#F73333]'
                      }`}>
                        {client.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">{client.date}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{client.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile/Tablet Cards */}
          <div className="lg:hidden divide-y divide-gray-200">
            {clients.map((client) => (
              <div key={client.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">{client.clientName}</h3>
                    <p className="text-xs text-gray-600 mt-0.5">{client.company}</p>
                    <p className="text-xs text-gray-600 mt-0.5">{client.phone}</p>
                  </div>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    client.status === 'Approved' 
                      ? 'bg-green-100 text-green-700 border border-green-300' 
                      : 'bg-red-100 text-red-700 border border-red-300'
                  }`}>
                    {client.status}
                  </span>
                </div>
                
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500">Date</p>
                    <p className="text-sm text-gray-700 font-medium">{client.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Amount</p>
                    <p className="text-sm text-gray-700 font-medium">{client.amount}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Pagination */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <span>Show</span>
              <div className="relative">
                <select 
                  value={rowsPerPage}
                  onChange={(e) => setRowsPerPage(Number(e.target.value))}
                  className="appearance-none bg-white border border-gray-300 rounded px-3 py-1.5 pr-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-500 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
              <span>off <span className="font-semibold">800</span> Result</span>
              <button className="ml-4 text-blue-600 hover:text-blue-700 font-medium">
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDataTable;