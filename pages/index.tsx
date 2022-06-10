import type { NextPage } from "next";
import { FiGift, FiList, FiUser } from "react-icons/fi";
import { Layout } from "../components/templates";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="container mx-auto p-8">
        {/* START: search */}

        {/* <div className="group flex gap-2 items-center  border-2 border-gray-200 rounded max-w-sm py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-gray-500">
         className="text-gray-500" />
          <input
            className=" appearance-none   text-gray-700  leading-tight focus:outline-none"
            type="text"
            placeholder="Search"
          />
        </div> */}
        {/* END:  search */}

        {/* START: Hello */}
        <div className="flex justify-between items-end">
          <div className="text-gray-800 mt-8">
            <h1 className="text-2xl font-bold tracking-tight">
              SPK Metode Topsis
            </h1>
            <p className="text-gray-400 font-semibold">Welcome Back!</p>
          </div>
          {/* <div className="flex items-center gap-2 border border-gray-400 px-4 py-1 rounded-sm">
            <span className="text-base text-gray-600">Filter</span>
            <FiFilter />
          </div> */}
        </div>
        {/* END: Hello */}

        {/* START: Statistic */}
        <section className="mt-4">
          <div className="inline-flex flex-wrap gap-4">
            <Statistic
              title="Alternatif"
              value={10}
              color="bg-[#f39c12]"
              icon={<FiUser size={36} />}
            />
            <Statistic
              title="Criteria"
              value={5}
              color="bg-[#16a085]"
              icon={<FiList size={36} />}
            />
            <Statistic
              title="Project"
              value={5}
              color="bg-[#2980b9]"
              icon={<FiGift size={36} />}
            />
          </div>
        </section>
        {/* END: Statistic */}
      </div>
    </Layout>
  );
};

interface IStatistic {
  title?: string;
  value?: number;
  description?: string;
  icon?: React.ReactElement;
  color?: string;
}
const Statistic: React.FC<IStatistic> = (props) => {
  return (
    <div className={`py-2 px-4 rounded-xl ${props.color}  shadow-sm w-48`}>
      <div className="flex justify-between">
        <div className="float-left">
          <h5 className="text-gray-100 text-lg font-semibold">{props.title}</h5>
          <h3 className="text-gray-50 text-2xl">{props.value}</h3>
        </div>
        <div className="text-gray-100">{props.icon}</div>
      </div>
    </div>
  );
};

export default Home;
