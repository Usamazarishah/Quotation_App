// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { SIDE_MENU_DATA } from "../../Utils/data.js";

// export default function SideMenu() {
//   const location = useLocation();

//   return (
//     <div className="w-[240px] bg-white h-screen border-r p-4">
//       {SIDE_MENU_DATA.map((item) => {
//         const Icon = item.icon;
//         const isActive = location.pathname === item.path;

//         return (
//           <Link
//             key={item.id}
//             to={item.path}
//             className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer 
//               ${isActive ? "bg-primary text-white" : "text-black hover:bg-gray-100"}`}
//           >
//             <Icon className="text-xl" />
//             <span className="text-sm font-medium">{item.label}</span>
//           </Link>
//         );
//       })}
//     </div>
//   );
// }



import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SIDE_MENU_DATA } from "../../Utils/data.js";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import Vector from '../../assets/images/Vector.png'

export default function SideMenu() {
  const location = useLocation();
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`h-screen fixed top-0 left-0 bg-white border-r border-[#0000003D] p-4 z-50
      transition-all duration-300
      ${open ? "w-[255px]" : "w-[90px]"}`}
    >
      {/* Collapse Button */}


      {/* Logo / Title */}
      <div className="flex items-center gap-3 px-2 mb-6 h-[68px] border-b border-[#0000003D] ">
        <img src={Vector} alt="" className="" />
        {open && <h2 className="text-xl font-semibold">SD Quotation</h2>}
        <button
          onClick={() => setOpen(!open)}
          className="absolute right-[18px] top-10 bg-[#FBFAFA] border border-[#21212114] rounded-[75%] p-1 shadow w-6 h-6"
        >
          <MdOutlineKeyboardDoubleArrowLeft
            className={`text-[15px] transition-transform duration-300
          ${open ? "" : "rotate-180"}`}
          />
        </button>
      </div>

      {/* MENU ITEMS */}
      {SIDE_MENU_DATA.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;

        return (
          <Link
            key={item.id}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all
            ${isActive ? "bg-primary text-white" : "hover:bg-gray-100 text-black"}
            ${!open && "justify-center"}`}
          >
            <Icon className="text-xl" />
            {open && <span className="text-sm font-medium">{item.label}</span>}
          </Link>
        );
      })}
    </div>
  );
}
