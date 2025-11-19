import React from "react";
import { Client_Card_DATA } from "../../Utils/clientCard";

export default function ClientCard({ open }) {
    return (
        <div className={` grid gap-3 transition-all duration-300 px-6 pt-4 ${open ? "grid-cols-4" : "grid-cols-4"} `}>
            {Client_Card_DATA.map((card) => {
                const Icon = card.icon;
                return (
                    <div
                        key={card.id}
                        className="bg-white border border-[#0000003D] rounded-xl p-5 shadow-sm hover:shadow-md transition-all"
                    >
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 bg-[#E9EAEC] rounded-full text-[#00000099] p-[6px]">           
                                 <Icon className="text-xl" />
                            </span>
                            <h2 className=" font-bold text-sm">
                                {card.title}
                            </h2>
                        </div>


                        <p className="text-[28px] font-bold mt-2">{card.value}</p>
                         <div className="flex gap-2">
                        <p className={`text-xs mt-2 text-center bg-[#E5F5ED] w-[34px] h-5 rounded-xs p-[2px] ${card.changeColor}`}>
                            {card.change}
                        </p> 
                        <span className="text-gray-700 mt-1">vs last week</span>
                        </div>
                    </div>)
            })}
        </div>
    );
}
