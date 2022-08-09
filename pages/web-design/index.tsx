import React from "react";
import HeaderDesign from "../../components/HeaderDesign/HeaderDesign";
import { filterCard } from "../../utils/filterCard";
import MultipleCardDesign from "../../components/CardDesign/MultipleCardDesign";
import { dataDesignMock } from "../../DummyData/DummyData";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useRouter } from "next/router";
import DDTableMultiplePages from "../../components/DesignTable/DesktopDesignTable/DDTableMultiplePages";

type Props = {};

export default function WebDesign({}: Props) {
  const route = useRouter();
  const filterCardData = filterCard("web-design", dataDesignMock);
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  return (
    <>
      <HeaderDesign
        title={"Web Design"}
        description={
          "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
        }
      />
      <MultipleCardDesign array={filterCardData["web-design"]} />

      <DDTableMultiplePages
        isLaptop={isLaptop}
        isTablet={isTablet}
        route={route}
      />
    </>
  );
}
