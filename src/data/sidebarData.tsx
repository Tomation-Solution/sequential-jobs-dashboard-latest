import { RxDashboard } from "react-icons/rx";
import { HiOutlineLogout } from "react-icons/hi";
import { AiOutlinePieChart } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { MdOutlineNotificationAdd } from "react-icons/md";

interface SideBarNavLinkArrayProps {
  name: string;
  icon: JSX.Element;
  link: string;
}

export const sidebarNavLinkData: Array<SideBarNavLinkArrayProps> = [
  {
    name: "Dashboard",
    icon: <RxDashboard className='w-5 h-5'  />,
    link: "/",
  },
  {
    name: "Employers",
    icon: <AiOutlinePieChart className='w-5 h-5' />,
    link: "/employers",
  },
  {
    name: "Applicants",
    icon: <FiUsers className='w-5 h-5' />,
    link: "/applicants",
  },
  {
    name: "Notifications",
    icon: <MdOutlineNotificationAdd className='w-5 h-5' />,
    link: "/notifications",
  },
  {
    name: "Logout",
    icon: <HiOutlineLogout className='w-5 h-5' />,
    link: "/logout",
  },
];
