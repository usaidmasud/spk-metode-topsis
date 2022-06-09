import React from "react";
import { AiFillEnvironment, AiOutlineHome } from "react-icons/ai";
import { BsArrowLeftShort, BsChevronDown, BsSearch } from "react-icons/bs";
import {
  FiActivity,
  FiAnchor,
  FiHome,
  FiItalic,
  FiLogOut,
  FiMail,
  FiPackage,
  FiUser,
  FiVideo
} from "react-icons/fi";
interface Props {
  children: React.ReactNode;
}

interface ISubmenu {
  title: string;
}
interface IMenu {
  title: string;
  href?: string;
  spacing?: boolean;
  icon?: React.ReactNode;
  submenu?: boolean;
  submenuItems?: ISubmenu[];
}
const menus: IMenu[] = [
  { title: "Home", icon: <FiHome /> },
  { title: "Criteria", icon: <FiPackage /> },
  { title: "Media", spacing: true, icon: <FiVideo /> },
  {
    title: "Projects",
    submenu: true,
    icon: <FiAnchor />,
    submenuItems: [
      { title: "Projects" },
      { title: "Tasks" },
      { title: "Files" },
    ],
  },
  { title: "Analytics", icon: <FiActivity /> },
  {
    title: "Inbox",
    submenu: true,
    icon: <FiMail />,
    submenuItems: [
      { title: "Projects" },
      { title: "Tasks" },
      { title: "Files" },
    ],
  },
  { title: "Profile", icon: <FiUser />, spacing: true },
  { title: "Title", icon: <FiItalic /> },
  { title: "Logout", icon: <FiLogOut /> },
];
const TopsisLayout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [submenuOpen, setSubmenuOpen] = React.useState<boolean>(false);
  return (
    <div className="flex">
      <div
        className={`bg-gray-800 h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          onClick={() => setOpen(!open)}
          className={`bg-white absolute text-gray-800 text-3xl rounded-full -right-3 top-9 border-4 border-gray-800 cursor-pointer ${
            !open && "rotate-180"
          }`}
        />
        <div className="inline-flex">
          <AiFillEnvironment
            className={`
        bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
          open && "rotate-[360deg]"
        }`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            SPK{" "}
            <span className="text-gray-800 bg-gray-100 rounded-md px-1">
              TOPSIS
            </span>
          </h1>
        </div>

        <div
          className={`flex items-center rounded-md bg-slate-500 mt-6 px-4 py-2 ${
            open ? "px-4" : "px-2.5"
          }`}
        >
          <BsSearch
            className={`
          text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`}
          />
          <input
            type="search"
            placeholder="Search"
            className={`text-base bg-transparent w-full text-white focus:outline-none ${
              !open && "hidden"
            }`}
          />
        </div>

        <ul className="">
          {menus.map((menu: IMenu, index) => (
            <Menu navOpen={open} key={index} menu={menu} />
          ))}
        </ul>
      </div>
      <div className="p-7 flex-1">{children}</div>
    </div>
  );
};

export default TopsisLayout;

interface IPropsMenu {
  menu: IMenu;
  navOpen: boolean;
}
const Menu: React.FC<IPropsMenu> = ({ menu, navOpen }) => {
  const [submenuOpen, setSubmenuOpen] = React.useState<boolean>(false);
  return (
    <>
      <li
        className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:text-white hover:bg-slate-500 rounded-md ${
          menu.spacing ? "mt-9" : "mt-2"
        }`}
      >
        <span className={`text-2xl block float-left`}>
          {menu.icon ? menu.icon : <AiOutlineHome />}
        </span>
        <span
          className={`text-base font-medium flex-1 ${!navOpen && "hidden"}`}
        >
          {menu.title}
        </span>
        {menu.submenu && navOpen && (
          <BsChevronDown
            className={`${submenuOpen && "rotate-180"}`}
            onClick={() => setSubmenuOpen(!submenuOpen)}
          />
        )}
      </li>
      {menu.submenu && submenuOpen && navOpen && (
        <ul className={`${submenuOpen ? "block" : "hidden"}`}>
          {menu.submenuItems?.map((submenu, index) => (
            <li
              key={index}
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-slate-500 rounded-md
                      `}
            >
              {submenu.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
