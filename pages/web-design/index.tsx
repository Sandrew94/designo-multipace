import React from "react";
import HeaderDesign from "../../components/HeaderDesign/HeaderDesign";
import { filterCard } from "../../utils/filterCard";
import MultipleCardDesign from "../../components/CardDesign/MultipleCardDesign";
import { dataDesignTest } from "../../DummyData/DummyData";

type Props = {};

export default function WebDesign({}: Props) {
  const filterCardData = filterCard("web-design", dataDesignTest);

  return (
    <>
      <HeaderDesign
        title={"Web Design"}
        description={
          "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
        }
      />
      <MultipleCardDesign array={filterCardData["web-design"]} />
    </>
  );
}
