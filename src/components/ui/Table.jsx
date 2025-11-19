import React from 'react';
import { Edit2, Trash2, Share2 } from 'lucide-react';

const Table = () => {
    const quotations = [
        { id: 1, clientName: 'Smith Jones', date: 'Jan.02.2025', amount: '$230', status: 'Sent' },
        { id: 2, clientName: 'Victoria Roy', date: 'Feb.05.2025', amount: '$340', status: 'Sent' },
        { id: 3, clientName: 'Liam James', date: 'Feb.06.2025', amount: '$550', status: 'Sent' },
        { id: 4, clientName: 'David Liam', date: 'Feb.07.2025', amount: '$666', status: 'Sent' },
        { id: 5, clientName: 'Robert Kevin', date: 'Feb08.2025', amount: '$800', status: 'Sent' },
        { id: 6, clientName: 'Michael Roy', date: 'Feb.09.2025', amount: '$1200', status: 'Sent' },
        { id: 7, clientName: 'Lucas Roy', date: 'Feb.10.2025', amount: '$1400', status: 'Sent' }
    ];

    return (
        <div className="w-full min-h-screen bg-gray-50 pt-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg sm:text-xl font-semibold text-[#0D0D0D]">Recent Quotation</h2>
                </div>

                {/* Table Container */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200 bg-gray-50">
                                    <th className="px-6 py-3 text-left text-xl font-semibold w-12">#</th>
                                    <th className="px-6 py-3 text-left text-xl font-semibold">Clients Name</th>
                                    <th className="px-6 py-3 text-left text-xl font-semibold">Date</th>
                                    <th className="px-6 py-3 text-left text-xl font-semibold">Total Amount</th>
                                    <th className="px-6 py-3 text-left text-xl font-semibold">Status</th>
                                    <th className="px-8 py-3 text-left text-xl font-semibold">Action</th>
                                    <th className="px-6 py-3 text-left text-xl font-semibold">   
                                      <button className="text-xl font-semibold text-[#00000099] transition-colors cursor-pointer">
                                        View all
                                      </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {quotations.map((quote) => (
                                    <tr key={quote.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-xl font-semibold">{quote.id}</td>
                                        <td className="px-6 py-4 text-xl font-semibold">{quote.clientName}</td>
                                        <td className="px-6 py-4 text-xl font-semibold text-[#00000099]">{quote.date}</td>
                                        <td className="px-6 py-4 text-xl font-semibold text-[#00000099]">{quote.amount}</td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-4 py-1 rounded-full text-[10px] font-bold bg-[#E4F4EA] border border-[#C6ECC4] text-[#4E866C] cursor-pointer">
                                                {quote.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <button className="p-1.5 hover:bg-green-50 rounded transition-colors cursor-pointer">
                                                    <Edit2 className="w-4 h-4 text-[#34C759] " />
                                                </button>
                                                <button className="p-1.5 hover:bg-red-50 rounded transition-colors cursor-pointer">
                                                    <Trash2 className="w-4 h-4 text-[#FF3B30] " />
                                                </button>
                                                <button className="p-1.5 hover:bg-blue-50 rounded transition-colors cursor-pointer">
                                                    <Share2 className="w-4 h-4 text-[#007AFF] " />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden divide-y divide-gray-200">
                        {quotations.map((quote) => (
                            <div key={quote.id} className="p-4 hover:bg-gray-50 transition-colors">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-medium text-gray-500">#{quote.id}</span>
                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-900">{quote.clientName}</h3>
                                            <p className="text-xs text-gray-500 mt-0.5">{quote.date}</p>
                                        </div>
                                    </div>
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                        {quote.status}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="text-base font-semibold text-gray-900">{quote.amount}</div>
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 hover:bg-red-50 rounded transition-colors">
                                            <Edit2 className="w-4 h-4 text-red-400" />
                                        </button>
                                        <button className="p-2 hover:bg-blue-50 rounded transition-colors">
                                            <Trash2 className="w-4 h-4 text-blue-400" />
                                        </button>
                                        <button className="p-2 hover:bg-blue-50 rounded transition-colors">
                                            <Share2 className="w-4 h-4 text-blue-400" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;