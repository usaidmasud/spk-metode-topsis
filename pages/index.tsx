import type { NextPage } from "next";
import { Criteria, People } from "../components/organisms";
import { Layout } from "../components/templates";

const Home: NextPage = () => {
  return (
    <Layout>
      <Criteria />
      <People />
    </Layout>
  );
};

export default Home;
