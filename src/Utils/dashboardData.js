import { FaPlus } from "react-icons/fa";
import { RiHome7Line } from "react-icons/ri";
import { LuUsers, LuUserPlus } from "react-icons/lu";
import { HiOutlineTemplate } from "react-icons/hi";

export const SIDE_MENU_DATA = [
    {
        id: "01",
        label: "Create Quotation",
        icon: FaPlus,
        path: "/admin-quotation",
    },
    {
        id: "02",
        label: "Dashboard",
        icon: RiHome7Line,
        path: "/admin-dashboard",
    },
    {
        id: "03",
        label: "Client List",
        icon: LuUsers,
        path: "/admin-client",
    },
    {
        id: "04",
        label: "Templates",
        icon:  HiOutlineTemplate ,
        path: "/admin-templates",
    }, {
        id: "05",
        label: "User Management",
        icon: LuUserPlus ,
        path: "/admin-user",
    },

];