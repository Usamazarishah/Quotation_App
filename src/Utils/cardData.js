import { LiaBookmarkSolid } from "react-icons/lia";
import { MdOutlinePendingActions } from "react-icons/md";
import { FiUsers } from "react-icons/fi";


export const CARD_DATA = [
    {
        id: 1,
        icon: LiaBookmarkSolid,
        title: "Total Quotation",
        value: "12",
        change: "+2%",
        changeColor: "text-green-500",
    },
    {
        id: 2,
        icon: MdOutlinePendingActions,
        title: "Pending Quotation",
        value: "25%",
        change: "+12%",
        changeColor: "text-green-500",
    },
    {
        id: 3,
        icon:  FiUsers,
        title: "New Clients",
        value: "230",
        change: "+24%",
        changeColor: "text-green-500",
    },
];