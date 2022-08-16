import React from "react";
import HeaderDesign from "../../components/HeaderDesign/HeaderDesign";
import { filterCard } from "../../utils/filterCard";
import MultipleCardDesign from "../../components/CardDesign/MultipleCardDesign";
import { dataDesignMock } from "../../DummyData/DataDesignMock";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useRouter } from "next/router";
import DDTableMultiplePages from "../../components/DesignTable/DesktopDesignTable/DDTableMultiplePages";

type Props = {};

export default function GraphicDesign({}: Props) {
  const filterCardData = filterCard("graphic-design", dataDesignMock);
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const route = useRouter();

  return (
    <>
      <HeaderDesign
        title={"Graphic Design"}
        description={
          "We deliver eye-catching branding materials that are tailored to meet your business objectives."
        }
      />

      <MultipleCardDesign array={filterCardData["graphic-design"]} />

      <DDTableMultiplePages
        isLaptop={isLaptop}
        isTablet={isTablet}
        route={route}
      />
    </>
  );
}
