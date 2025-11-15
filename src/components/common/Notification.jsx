import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";


export default function Notification() {
    return (
        <div className="relative w-[36px] h-[36px] bg-[#FBFAFA] border border-[#00000014] rounded-lg flex justify-center items-center">

            <button className=''>
                <IoIosNotificationsOutline className="  text-xl" />
            </button>

            <span className="absolute top-[8px] right-[9px] w-[6px] h-[6px] bg-[#EC1C2C] rounded-full"></span>


        </div>
    )
}
