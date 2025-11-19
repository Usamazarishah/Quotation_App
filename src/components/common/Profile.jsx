
import React from 'react'
import adminDb from '../../assets/images/admin-db.png'
import { Link } from 'react-router-dom'


export default function Profile({ collapse, showEmail }) {
  return (
    <div className={`relative rounded-lg flex items-center gap-2 transition-all duration-300
      ${collapse ? 'w-[50px] ml-2 h-[36px]' : 'w-auto p-1'}
      overflow-hidden`}
    >
      <Link 
        to='/admin-profile' 
        className='w-[36px] h-[36px] border border-[#1F2A44] rounded-full flex justify-center items-center overflow-hidden flex-shrink-0'
      >
        <img src={adminDb} alt="adminDb" className='w-full h-full object-cover'/>
      </Link>

      {!collapse && (
        <div className='flex flex-col min-w-0'>
          <h3 className='font-medium text-sm truncate'>Brown Martin</h3>
          <p className='text-xs text-[#00000099] break-words'>
            {showEmail ? 'brownmartin@gmail.com' : 'Business owner'}
          </p>
        </div>
      )}
    </div>
  )
}
