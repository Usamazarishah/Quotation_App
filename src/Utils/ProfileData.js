import { FaRegUser } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiMessageRounded } from "react-icons/bi";
import { TbArrowLeftFromArc } from "react-icons/tb";
import { GrCircleInformation } from "react-icons/gr";



export const PROFILE_SIDE_DATA = [
    {
        id: "01",
        label: "My Profile",
        icon: FaRegUser,
        path: "/admin-profile",
    },
    {
        id: "02",
        label: "Settings",
        icon: IoSettingsOutline,
        path: "/admin-settings",
    },
    {
        id: "03",
        label: "Notifications",
        icon: IoNotificationsOutline,
        path: "/admin-notifications",
    },
    {
        id: "04",
        label: "FAQ",
        icon:  BiMessageRounded ,
        path: "/admin-faq",
    }, {
        id: "05",
        label: "About App",
        icon: GrCircleInformation ,
        path: "/admin-about",
    },
    {
        id: "06",
        label: "Logout",
        icon: TbArrowLeftFromArc ,
        path: "/login",
    }

];