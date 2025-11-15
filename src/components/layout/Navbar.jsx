import React from 'react'
import Search from '../common/Search'
import Notification from '../common/Notification'
import Profile from '../common/Profile'

export default function Navbar() {
  return (
    <div className='h-[60px] border-b border-[#F8F8F8] flex justify-between items-center px-8 '>
      <h1 className='font-semibold text-xl'>Admin</h1>
      <div className='flex gap-4'>
        <Search/>
        <Notification/>
        <Profile/>
        
      </div>
    </div>
  )
}
