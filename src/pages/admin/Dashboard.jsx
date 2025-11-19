
import React, { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import SideMenu from '../../components/layout/SideMenu';
import Table from '../../components/ui/Table';
import DashboardCard from '../../components/common/DashboardCard';

export default function Dashboard() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <SideMenu open={open} setOpen={setOpen} />
      <Navbar open={open} />
      <div className={`p-8 transition-all duration-300 ${open ? 'ml-[255px]' : 'ml-[90px]'}`}>
          <h1 className='text-3xl mt-14'>Welcome Martin Brown,  👋</h1>
          <div>
            <DashboardCard open={open} />

          </div>
          <div>
            <Table open={open} />
          </div>
      </div>
      
      
    </div>
  );
}