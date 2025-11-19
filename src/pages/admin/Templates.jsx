
import React, { useState } from 'react';
import SideMenu from '../../components/layout/SideMenu';
import Notification from '../../components/common/Notification';
import Profile from '../../components/common/Profile';
import Search from '../../components/common/Search';
import TemplateList from '../../components/common/TemplateList';


export default function Templates() {
    const [open, setOpen] = useState(true);


    return (
        <div className="flex min-h-screen bg-white">
            {/* Side Menu */}
            <SideMenu open={open} setOpen={setOpen} />

            <div className={`flex-1 transition-all duration-300 h-[60px] border-b border-b-[#F8F8F8]  ${open ? 'ml-64' : 'ml-20'}`}>
                <div className="px-6 py-3 flex justify-between items-center">
                    <div className="flex flex-col">
                        <h3 className="text-[#000000] font-semibold text-xl">Templates</h3>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <Search/>
                        <Notification />
                        <Profile collapse={false} showEmail={false} />

                    </div>

                </div>
                <div>
                    <TemplateList/>
                </div>
                
            </div>
        </div>
    );
}