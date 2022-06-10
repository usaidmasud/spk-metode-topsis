import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FiGift, FiHome, FiList, FiUser } from "react-icons/fi";
import { Menu } from "../../atoms";
interface Props {
  children: React.ReactNode;
}

const Layout2: React.FC<Props> = (props) => {
  const router = useRouter();
  const [navOpen, setNavOpen] = React.useState<boolean>(false);

  return (
    <div className="flex">
      <header className="w-20 md:w-56 border-r-2 border-gray-200 min-h-screen duration-300">
        <nav className="md:px-8 px-4 py-4 ">
          <div className="mb-8">
            <Link href="/">
              <a className="text-2xl font-bold ">
                <span className="hidden md:block ">SPK</span>
                <span className="md:hidden block md:text-2xl text-sm text-primary-200">TOPSIS</span>
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
              isActive={router.pathname === "/calculation"}
              label="Calculation"
              icon={<FiGift size={24} />}
              href="/calculation"
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
      <main className="overflow-auto w-full z-0">{props.children}</main>
    </div>
  );
};

export default Layout2;
