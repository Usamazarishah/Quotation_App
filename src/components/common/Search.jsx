import React from 'react'
//  flex justify-between text-sm text-black rounded-[10px]  py-3  outline-none hover:cursor-pointer hover:border-primary 
// export default function Search() {
//     return (
//         <div >
//             <input
//                 type='search'
//                 placeholder='Search...'
//                 className='w-[360px] h-[36px] bg-[#FBFAFA] outline-none text-[#00000099] border border-[#00000014] rounded-lg px-[13px] py-[11px]'
//                 value=''
//             />
//         </div>
//     )
// }


import { CiSearch } from "react-icons/ci";

export default function Search() {
    return (
        <div className="relative w-[360px]">

            <CiSearch className="absolute left-4 top-[12px] text-[#00000099] text-sm" />

            <input
                type="search"
                placeholder="Search..."
                className="w-full h-[36px] bg-[#FBFAFA] outline-none text-[#00000099] 
                           border border-[#00000014] rounded-lg px-9 py-[11px] placeholder:text-xs items-center"
            />
        </div>
    );
}
