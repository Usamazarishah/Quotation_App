import React from 'react'
import adminDb from '../../assets/images/admin-db.png'

export default function Profile() {
  return (
        <div className="relative w-36 h-[36px] rounded-lg flex gap-1.5">
            <div className=' w-[36px] h-[36px]  border border-[#1F2A44] rounded-full flex justify-center items-center overflow-hidden'>
                <img  src={adminDb} alt="adminDb" className='w-full h-full object-cover'/>
            </div>
            <div className='flex flex-col'>
                <h3 className='font-medium text-sm'>Brown Martin</h3>
                <p className='text-xs text-[#00000099]'>Business owner</p>
            </div>

        </div>
  )
}
