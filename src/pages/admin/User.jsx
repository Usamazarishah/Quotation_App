
import React, { useState } from 'react';
import SideMenu from '../../components/layout/SideMenu';
import Notification from '../../components/common/Notification';
import Profile from '../../components/common/Profile';
// import ClientCard from '../../components/common/ClientCard';
import Search from '../../components/common/Search';
// import { RxCross2 } from "react-icons/rx";
// import { IoIosArrowDropdown } from "react-icons/io";
// import ClientDataTable from '../../components/ui/ClientDataTable';
import { FaPlus } from "react-icons/fa6";
import UserManagementTable from '../../components/ui/UserManagmentTable';


export default function User() {
    const [open, setOpen] = useState(true);


    return (
        <div className="flex min-h-screen bg-white">
            {/* Side Menu */}
            <SideMenu open={open} setOpen={setOpen} />

            <div className={`flex-1 transition-all duration-300 h-20 border-b border-b-[#F8F8F8] p-2 ${open ? 'ml-64' : 'ml-20'}`}>
                <div className="px-6 py-3 flex justify-between items-center">
                    <div className="flex flex-col">
                        <h3 className="text-[#000000] font-semibold text-xl">User Management</h3>
                        <p className="text-[#535862] text-sm">Manage your team member and there account permission</p>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <Notification />
                        <Profile collapse={false} showEmail={false} />

                    </div>

                </div>

                <div className="flex items-center justify-between px-6 pt-3 pb-2">
                    <h1 className='font-bold text-lg'>All Users <span className=' text-[#9B9B9B]'> 2000</span> </h1>
                    <div className="flex items-center gap-3">
                        <div>
                            <Search />
                        </div>
                        <button className="w-[118px] h-9 flex items-center gap-2 px-2.5 py-2 bg-black text-white rounded-lg  cursor-pointer text-sm font-medium">
                           <FaPlus/>
                            Add User
                        </button>
                    </div>

                </div>
                <div>
                    <UserManagementTable />
                </div>


            </div>
        </div>
    );
}