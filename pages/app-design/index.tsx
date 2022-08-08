import React from "react";
import HeaderDesign from "../../components/HeaderDesign/HeaderDesign";
import { filterCard } from "../../utils/filterCard";
import MultipleCardDesign from "../../components/CardDesign/MultipleCardDesign";
import { dataDesignTest } from "../../DummyData/DummyData";

type Props = {};

export default function AppDesign({}: Props) {
  const filterCardData = filterCard("app-design", dataDesignTest);
  return (
    <>
      <HeaderDesign
        title={"App Design"}
        description={
          "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
        }
      />
      <MultipleCardDesign array={filterCardData["app-design"]} />
    </>
  );
}
