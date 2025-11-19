
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Profile from "../common/Profile";
import { PROFILE_SIDE_DATA } from "../../Utils/ProfileData";
import { IoIosArrowForward } from "react-icons/io";


export default function AdminProfileSide() { 
  const location = useLocation();

  return (
    <div className={`h-screen fixed bg-white border-r border-[#0000003D] px-5 pt-6  z-50 `}>
<div className="mb-6">
  <Profile collapse={false} showEmail={true} />
</div>
      
      {PROFILE_SIDE_DATA.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;

        return (
          <Link
            key={item.id}
            to={item.path}
            className={`
              flex items-center gap-3 px-1 pt-4 pb-1 cursor-pointer transition-all mb-6 border-b border-[#00000014]
              
              `}  >
            {/* <IoIosArrowForward/> */}
            <Icon className="text-xl" />
            <span className="text-sm font-medium">{item.label}</span>
              <IoIosArrowForward className="ml-auto" />

          </Link>
        );
      })}

    </div>
  );
}