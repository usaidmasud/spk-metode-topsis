import type { NextPage } from "next";
import {
  FiArrowDownRight,
  FiCompass,
  FiEye,
  FiFilter,
  FiSearch,
  FiShoppingCart
} from "react-icons/fi";
import { Layout } from "../components/templates";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="container mx-auto p-8">
        {/* START: search */}

        <div className="group flex gap-2 items-center  border-2 border-gray-200 rounded max-w-sm py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-gray-500">
          <FiSearch size={24} className="text-gray-500" />
          <input
            className=" appearance-none   text-gray-700  leading-tight focus:outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
        {/* END:  search */}

        {/* START: Hello */}
        <div className="flex justify-between items-end">
          <div className="text-gray-800 mt-8">
            <h1 className="text-2xl font-bold tracking-tight">Hello Next.js</h1>
            <p className="text-gray-400 font-semibold">Welcome Back!</p>
          </div>
          <div className="flex items-center gap-2 border border-gray-400 px-4 py-1 rounded-sm">
            <span className="text-base text-gray-600">Filter</span>
            <FiFilter />
          </div>
        </div>
        {/* END: Hello */}

        {/* START: Statistic */}
        <section className="mt-4">
          <div className="grid grid-cols-3 gap-2 bg-secondary-100 p-4 rounded-2xl">
            <Statistic icon={<FiEye className="" size={24} />} />
            <Statistic icon={<FiCompass className="" size={24} />} />
            <Statistic icon={<FiShoppingCart className="" size={24} />} />
          </div>
        </section>
        {/* END: Statistic */}

        {/* START: Statistic2 */}
        <section className="mt-4">
          <div className="grid grid-cols-2 gap-8">
            <Statistic2 />
            <Statistic2 />
            <Statistic2 />
            <Statistic2 />
          </div>
        </section>
        {/* END: Statistic2 */}
      </div>
    </Layout>
  );
};

interface IStatistic {
  title?: string;
  value?: number;
  description?: string;
  icon?: React.ReactElement;
}
const Statistic: React.FC<IStatistic> = (props) => {
  return (
    <div className="p-2">
      <div className=" bg-gray-300 w-12 h-12 rounded-full flex justify-center items-center">
        {props.icon}
      </div>
      <div className="flex items-start mt-4 flex-col">
        <span className="text-base text-gray-600">views</span>
        <h2 className="text-3xl m-0 font-bold text-gray-700">500</h2>
        <span className="text-gray-600 text-sm">Per Day</span>
      </div>
    </div>
  );
};

const Statistic2 = () => {
  return (
    <div className="bg-red-200 rounded-xl p-4 relative ">
      <div className="flex justify-between items-center">
        <div className="">
          <h5 className="text-xl font-semibold">Sales</h5>
          <p className="text-sm text-gray-600">Total Sales Today</p>
          <h3 className="text-3xl font-bold">$500</h3>
        </div>
        <div className="">
          {/* <Circle
            className="w-16 h-16"
            percent={75}
            strokeWidth={8}
            strokeColor="#4E944F"
          /> */}
        </div>
      </div>
      <div className="absolute top-2 right-2">
        <FiArrowDownRight size={24} className="text-red-400" />
      </div>
    </div>
  );
};
export default Home;
