import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  return (
    <div className="">
      <header className="bg-gray-800 text-white sticky">
        <nav className="flex px-8 justify-between items-center h-14 container mx-auto">
          <h1 className="font-semibold text-lg">SPK Metode Topsis</h1>
        </nav>
      </header>
      <main className="w-full grid grid-cols-12">
        <aside className="col-span-3 bg-gray-800 px-8 min-h-screen pt-8">
          <ul className="flex flex-col gap-2 text-gray-200">
            <li className="group">
              <Link href="/">
                <a className="group-hover:underline hover:underline-offset-8">
                  Home
                </a>
              </Link>
            </li>
            <li className="group">
              <Link href="/criteria">
                <a className="group-hover:underline hover:underline-offset-8">
                  Criteria
                </a>
              </Link>
            </li>
            <li className="group">
              <Link href="/alternatif">
                <a className="group-hover:underline hover:underline-offset-8">
                  Alternatif
                </a>
              </Link>
            </li>
            <li className="group">
              <Link href="/project">
                <a className="group-hover:underline hover:underline-offset-8">
                  Project
                </a>
              </Link>
            </li>
          </ul>
        </aside>
        <div className="col-span-9 container mx-auto">{props.children}</div>
      </main>
    </div>
  );
};

export default Layout;
