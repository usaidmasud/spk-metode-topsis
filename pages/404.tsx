import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Layout } from "../components/templates";
const Custom404: NextPage = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen flex-col">
        <div className="w-96 h-64 relative">
          <Image src="/images/404.svg" layout="fill" alt="404" />
        </div>
        <div className="mt-8">
          <Link href="/">
            <a className="px-4 py-2 bg-primary-300 text-gray-100 rounded-sm bg-opacity-90 hover:bg-opacity-100">Back To Home</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Custom404;
