import type { NextPage } from "next";
import DesignTable from "../components/DesignTable/DesignTable";
import HeaderHome from "../components/HeaderHome/HeaderHome";

const Home: NextPage = () => {
  return (
    <>
      <HeaderHome />
      <DesignTable />
    </>
  );
};

export default Home;
