import type { NextPage } from "next";
import { Criteria, People } from "../components/organisms";
import { Layout } from "../components/templates";

const Home: NextPage = () => {
  return (
    <Layout>
      <section className="p-8">
        <Criteria />
      </section>
      <section className="p-8">
        <People />
      </section>
    </Layout>
  );
};

export default Home;
