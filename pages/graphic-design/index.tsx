import React from "react";
import HeaderDesign from "../../components/HeaderDesign/HeaderDesign";
import { filterCard } from "../../utils/filterCard";
import MultipleCardDesign from "../../components/CardDesign/MultipleCardDesign";
import { dataDesignTest } from "../../DummyData/DummyData";

type Props = {};

export default function GraphicDesign({}: Props) {
  const filterCardData = filterCard("graphic-design", dataDesignTest);
  return (
    <>
      <HeaderDesign
        title={"Graphic Design"}
        description={
          "We deliver eye-catching branding materials that are tailored to meet your business objectives."
        }
      />

      <MultipleCardDesign array={filterCardData["graphic-design"]} />
    </>
  );
}
