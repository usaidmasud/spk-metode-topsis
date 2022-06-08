import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FiGift, FiHome, FiList, FiUser } from "react-icons/fi";
interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  const router = useRouter();

  return (
    <div className="flex">
      <header className="w-96 border-r-2 border-gray-200 min-h-screen">
        <nav className="px-8 py-4 ">
          <div className="mb-8">
            <Link href="/">
              <a className="text-2xl font-bold">
                SPK <span className="text-primary-200">TOPSIS</span>
              </a>
            </Link>
          </div>
          <ul className="flex flex-col gap-4">
            <Menu
              isActive={router.pathname === "/"}
              label="Home"
              icon={<FiHome size={24} />}
              href="/"
            />
            <Menu
              isActive={router.pathname === "/alternatif"}
              label="Alternatif"
              icon={<FiUser size={24} />}
              href="/alternatif"
            />
            <Menu
              isActive={router.pathname === "/project"}
              label="Project"
              icon={<FiGift size={24} />}
              href="/project"
            />
            <Menu
              isActive={router.pathname === "/criteria"}
              label="Criteria"
              icon={<FiList size={24} />}
              href="/criteria"
            />
          </ul>
        </nav>
      </header>
      <main className="w-full">{props.children}</main>
    </div>
  );
};

export default Layout;

interface IMenu {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive: boolean;
}
const Menu: React.FC<IMenu> = (props) => {
  return (
    <li>
      <Link href={props.href}>
        <a
          className={`
        flex gap-4 items-center text-lg text-gray-700 hover:font-semibold 
        ${props.isActive ? "font-semibold text-primary-200 underline underline-offset-4" : ""}
        `}
        >
          {props.icon}
          {props.label}
        </a>
      </Link>
    </li>
  );
};
