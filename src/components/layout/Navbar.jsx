// import React from 'react'
// import Search from '../common/Search'
// import Notification from '../common/Notification'
// import Profile from '../common/Profile'

// export default function Navbar() {
//   return (
// <div className='h-[60px] border-b border-[#F8F8F8] flex justify-between 
// items-center px-8 fixed top-0 right-0 left-[240px] bg-white z-40'>
//       <h1 className='font-semibold text-xl'>Admin</h1>
//       <div className='flex gap-4'>
//         <Search/>
//         <Notification/>
//         <Profile/>
        
//       </div>
//     </div>
//   )
// }



import React from 'react'
import Search from '../common/Search'
import Notification from '../common/Notification'
import Profile from '../common/Profile'

export default function Navbar({ open }) { 

  const navbarClasses = `
    h-[60px] border-b border-[#F8F8F8] flex justify-between 
    items-center px-8 fixed top-0 right-0 bg-white z-40
    transition-all duration-300
    ${open 
      ? 'left-[255px]' // If open (wide menu: 255px)
      : 'left-[90px]' // If closed (narrow menu: 90px)
    }
  `;

  return (
    <div className={navbarClasses}>
      <h1 className='font-semibold text-xl'>Admin</h1>
      <div className='flex gap-4 items-center'>
        <Search/>
        <Notification/>
        <Profile collapse={false} showEmail={false} />
        
      </div>
    </div>
  )
}