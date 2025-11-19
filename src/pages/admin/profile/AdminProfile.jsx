

import React, { useState } from "react";
import AdminProfileSide from "../../../components/layout/AdminProfileSide";
import Input from "../../../components/ui/Input";
import adminDb from '../../../assets/images/admin-db.png';

export default function AdminProfile() {
  const [formData, setFormData] = useState({
    fname: "Brown",
    lname: "Martin",
    email: "brownmartin2005",
    mobile: "0806 123 7890",
    gender: "male",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex">
      <AdminProfileSide />
      <div className="ml-[260px] py-16  w-[860px] h-[636px]">
        
        <div className="flex items-center gap-4">
           <img src={adminDb} alt="adminDb" className='w-40 h-40 rounded-full object-cover'/>

          <div className="flex flex-col">
            <button className="text-primary border border-[#D4D4D4] rounded-xl px-2 py-2 cursor-pointer font-medium w-[162px] h-[42px]">
              Upload new photo
            </button>
            <p className="text-sm font-medium text-[#898989] mt-1">
               At least 800x800 px recommended.<br/>
b              JPG or PNG is allowed
            </p>
          </div>
        </div>

        {/* FORM FIELDS */}
        <div className="grid grid-cols-2 gap-6 mt-10  ">

          <Input
            label="First Name"
            placeholder="First Name"
            value={formData.fname}
            onChange={handleChange}
            type="text"
            name="fname"
          />

          <Input
            label="Last Name"
            placeholder="Last Name"
            value={formData.lname}
            onChange={handleChange}
            type="text"
            name="lname"
          />

          <Input
            label="Email Address"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            type="text"
            name="email"
          />

          <Input
            label="Mobile Number"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            type="text"
            name="mobile"
          />

        </div>

        {/* GENDER BUTTONS */}
        <div className="mt-6">
          <p className="font-semibold text-[15px] text-slate-800">Gender</p>

          <div className="flex gap-3 mt-2">
            <button
              onClick={() => setFormData({ ...formData, gender: "male" })}
              className={`px-5 py-2 rounded-md border text-sm font-medium ${
                formData.gender === "male"
                  ? "bg-primary text-white"
                  : "border-gray-300 text-gray-600"
              }`}
            >
              Male
            </button>

            <button
              onClick={() => setFormData({ ...formData, gender: "female" })}
              className={`px-5 py-2 rounded-md border text-sm font-medium ${
                formData.gender === "female"
                  ? "bg-primary text-white"
                  : "border-gray-300 text-gray-600"
              }`}
            >
              Female
            </button>
          </div>
        </div>

        {/* SAVE BUTTON */}
        <button className="mt-10 w-full bg-primary text-white py-3 cursor-pointer rounded-md text-[16px] font-semibold">
          Save Changes
        </button>

      </div>
    </div>
  );
}
