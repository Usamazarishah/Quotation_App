

import React from "react";
import AdminProfileSide from "../../../components/layout/AdminProfileSide";
import { User_Data } from "../../../Utils/usersData";
import { BsThreeDotsVertical } from "react-icons/bs";


export default function AdminNotifications() {
  return (
    <div className="flex">

      <AdminProfileSide />

      <div className="ml-[230px] w-full px-10 py-8">

        <h1 className="text-center text-[22px] font-semibold mb-5">
          Notifications
        </h1>

        <p className="text-[15px] text-slate-600 mb-5">
          You have <span className="text-blue-500 font-medium">2 notifications</span> today.
        </p>

        <div className="flex flex-col gap-5">

          {User_Data.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between pb-3"
            >
              <div className="flex items-center gap-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <p className="text-[15px] font-semibold text-slate-900">
                    {user.name}
                    <span className="font-normal text-slate-700">
                      , fill up the quotation foam
                    </span>
                  </p>

                  <p className="text-[13px] text-slate-500 mt-1">12:22</p>
                </div>
              </div>

              <button className="w-6 h-6 mr-10 cursor-pointer "><BsThreeDotsVertical/></button>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

