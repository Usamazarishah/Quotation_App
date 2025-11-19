import React, { useState } from 'react';
import { MoreVertical } from 'lucide-react';
import { IoMdArrowDown } from "react-icons/io";
import { User_Data } from '../../Utils/usersData';

const UserManagementTable = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedUsers(User_Data.map(user => user.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (userId) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  return (
    <div className="w-full min-h-screen bg-white p-4 sm:p-6 lg:p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Table Container */}
        <div className="bg-white rounded-lg overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className=" bg-[#E4E4E466]">
                  <th className="px-6 py-4 text-left">
                    <input
                      type="checkbox"
                      checked={selectedUsers.length === User_Data.length}
                      onChange={handleSelectAll}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                    />
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#ABA9A9]">User name</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#ABA9A9]">Access</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#ABA9A9] flex items-center">Last active <span className='pt-[2px] ml-1.5'><IoMdArrowDown/></span></th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#ABA9A9]">Date added</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {User_Data.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => handleSelectUser(user.id)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={user.avatar} 
                          alt={user.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                          <div className="text-xs text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="px-4 py-1.5 bg-[#E1E7FF] text-[#4192FD] border border-[#3284F0] rounded-full text-xs font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                          Data export
                        </button>
                        <button className="px-4 py-1.5 bg-[#E1D5F1] text-[#976DBC] border border-[#B29EF1] rounded-full text-xs font-medium hover:bg-purple-100 transition-colors cursor-pointer">
                          Data import
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">{user.lastActive}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{user.dateAdded}</td>
                    <td className="px-6 py-4">
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors cursor-pointer">
                        <MoreVertical className="w-5 h-5 text-[#00000099]" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile/Tablet Cards */}
          <div className="lg:hidden space-y-4">
            {User_Data.map((user) => (
              <div key={user.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-4">
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => handleSelectUser(user.id)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer mt-1"
                  />
                  <img 
                    src={user.avatar} 
                    alt={user.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-900">{user.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{user.email}</p>
                  </div>
                  <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                    <MoreVertical className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <button className="px-3 py-1.5 bg-blue-50 text-blue-600 border border-blue-200 rounded-full text-xs font-medium">
                    Data export
                  </button>
                  <button className="px-3 py-1.5 bg-purple-50 text-purple-600 border border-purple-200 rounded-full text-xs font-medium">
                    Data import
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <p className="text-gray-500 mb-1">Last active</p>
                    <p className="text-gray-900 font-medium">{user.lastActive}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Date added</p>
                    <p className="text-gray-900 font-medium">{user.dateAdded}</p>
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

export default UserManagementTable;
