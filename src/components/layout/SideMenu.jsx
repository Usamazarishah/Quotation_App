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
import { IoIosArrowBack } from "react-icons/io";

export default function SideMenu() {
  const location = useLocation();
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`h-screen fixed top-0 left-0 bg-white border-r p-4 z-50
      transition-all duration-300
      ${open ? "w-[240px]" : "w-[70px]"}`}
    >
      {/* Collapse Button */}
      <button
        onClick={() => setOpen(!open)}
        className="absolute -right-3 top-20 bg-white border rounded-full p-1 shadow"
      >
        <IoIosArrowBack
          className={`text-lg transition-transform duration-300
          ${open ? "" : "rotate-180"}`}
        />
      </button>

      {/* Logo / Title */}
      <div className="flex items-center gap-3 px-2 mb-6">
        <div className="bg-primary text-white h-10 w-10 flex items-center justify-center rounded-md">
          SD
        </div>
        {open && <h2 className="text-xl font-semibold">Quotation</h2>}
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
