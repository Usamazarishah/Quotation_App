import React from "react";
import { CARD_DATA } from "../../Utils/cardData";

export default function DashboardCard({ open }) {
    return (
        <div
            className={`
        grid gap-2 transition-all duration-300 mt-6
        ${open ? "grid-cols-3" : "grid-cols-3"}
      `}
        >
            {CARD_DATA.map((card) => {
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
                            <h2 className=" font-bold ">
                                {card.title}
                            </h2>
                        </div>


                        <p className="text-3xl font-bold mt-2">{card.value}</p>
                         <div className="flex gap-2">
                        <p className={`text-xs mt-2 bg-[#E5F5ED] w-[34px] h-5 rounded-xs p-[2px] ${card.changeColor}`}>
                            {card.change}
                        </p> 
                        <span className="text-gray-700 mt-1">vs last week</span>
                        </div>
                    </div>)
            })}
        </div>
    );
}
