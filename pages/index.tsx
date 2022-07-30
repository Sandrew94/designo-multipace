import type { NextPage } from "next";
import DesignTable from "../components/DesignTable/DesignTable";
import HeaderHome from "../components/HeaderHome/HeaderHome";
import HeroSection from "../components/HeroSection/HeroSection";

const Home: NextPage = () => {
  return (
    <>
      <HeaderHome />
      <DesignTable />
      <HeroSection />
    </>
  );
};

export default Home;
