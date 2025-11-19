
import React, { useState } from 'react';
import SideMenu from '../../components/layout/SideMenu';
import Notification from '../../components/common/Notification';
import Profile from '../../components/common/Profile';
import ClientCard from '../../components/common/ClientCard';
import Search from '../../components/common/Search';
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDropdown } from "react-icons/io";
import ClientDataTable from '../../components/ui/ClientDataTable';

export default function Client() {
    const [open, setOpen] = useState(true);


    return (
        <div className="flex min-h-screen bg-white">
            {/* Side Menu */}
            <SideMenu open={open} setOpen={setOpen} />

            <div className={`flex-1 transition-all duration-300 h-20 border-b border-b-[#F8F8F8] p-2 ${open ? 'ml-64' : 'ml-20'}`}>
                <div className="px-6 py-3 flex justify-between items-center ">
                    <div className="flex flex-col">
                        <h3 className="text-[#000000] font-semibold text-xl">Client List</h3>
                        <p className="text-[#535862] text-sm">Manage and track all your clients</p>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <Notification />
                        <Profile collapse={false} showEmail={false} />
                    </div>

                </div>
                <div>
                  <ClientCard open={open} />
                </div>
                
                <div className="flex items-center justify-between px-6 pt-3 pb-2">
                        <div className="flex items-center gap-3">
                            <button className="w-[68px] h-[30px]  flex items-center gap-2 px-2.5 py-2 text-sm rounded-lg cursor-pointer border border-[#0000003D] ">
                                <span  className='text-[10px] font-medium text-[#A6A6A6]'>Filter</span>
                                 <IoIosArrowDropdown />
   
                            </button>
                            <button className="w-[156px] h-[30px] flex items-center justify-between gap-2 px-2.5 py-2 rounded-lg   cursor-pointer text-sm font-medium border border-[#0000003D]">
                                <span className='text-[10px] font-medium '>Clients: <span  className='text-[10px] font-medium text-[#A6A6A6]'>Smith Jones</span></span> 
                                 <RxCross2/>
                            </button>
                            <button className="w-[156px] h-[30px] flex items-center justify-between gap-2 px-2.5 py-2 rounded-lg   cursor-pointer text-sm font-medium border border-[#0000003D]">
                                <span className='text-[10px] font-medium '>Status: <span  className='text-[10px] font-medium text-[#A6A6A6]'>Approved</span></span> 
                                 <RxCross2/>
                            </button>
                        </div>

                         <div>
                            <Search/>
                         </div>
                </div>
                <div>
                    <ClientDataTable/>
                </div>

                
            </div>
        </div>
    );
}