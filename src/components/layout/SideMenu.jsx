
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SIDE_MENU_DATA } from "../../Utils/dashboardData.js";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import Vector from '../../assets/images/Vector.png'
import Profile from "../common/Profile.jsx";

export default function SideMenu({ open, setOpen }) { 
  const location = useLocation();

  return (
    <div
      className={`h-screen fixed top-0 left-0 bg-white border-r border-[#0000003D] p-4 z-50
      transition-all duration-300
      ${open ? "w-[255px]" : "w-[90px]"}`}
    >
      
      {/* Logo / Title */}
      <div className="flex items-center gap-2 px-2 mb-6 h-[68px] border-b border-[#0000003D] relative">
        <img src={Vector} alt="" className="" />
        {open && <h2 className="text-xl font-semibold">SD Quotation</h2>}
        {/* Collapse Button */}
        <button
          onClick={() => setOpen(!open)}
          // Adjusted the position slightly
          className="absolute right-[3px] top-6 bg-[#FBFAFA] border border-[#21212114] rounded-full p-1 shadow w-6 h-6 flex items-center justify-center" 
        >
          <MdOutlineKeyboardDoubleArrowLeft
            className={`text-base transition-transform duration-300
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
            className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all mb-3
            ${isActive ? "bg-primary text-white" : "hover:bg-[#1C2730] hover:text-white text-black "}
            ${!open && "justify-center"}`}
          >
            <Icon className="text-xl" />
            {open && <span className="text-sm font-medium">{item.label}</span>}
          </Link>
        );
      })}

     {/* profile */}
      <div className={`absolute bottom-6 left-2 transition-all duration-300
        ${open ? "w-[230px] ml-2" : "w-[70px] flex justify-center"}`}>
        <Profile collapse={open === false} showEmail={false}  />
      </div>
    </div>
  );
}