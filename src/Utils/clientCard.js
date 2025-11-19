import { FiType } from "react-icons/fi";
import { FcApproval } from "react-icons/fc";
import { FiUsers } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";


export const Client_Card_DATA = [
    {
        id: 1,
        icon: FiUsers,
        title: "Total Clients",
        value: "05",
        change: "+2%",
        changeColor: "text-green-500",
    },
    {
        id: 2,
        icon: FcApproval,
        title: "Approved Quotation",
        value: "05",
        change: "+2%",
        changeColor: "text-green-500",
    },
    {
        id: 3,
        icon:  RxCross2,
        title: "Recject Quotation",
        value: "01",
        change: "+2%",
        changeColor: "text-green-500",
    },
        {
        id: 3,
        icon:  FiType,
        title: "Total Value",
        value: "$99", 
        change: "+2%",
        changeColor: "text-green-500",
    },
];