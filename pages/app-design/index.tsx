import React from "react";
import HeaderDesign from "../../components/HeaderDesign/HeaderDesign";
import { filterCard } from "../../utils/filterCard";
import MultipleCardDesign from "../../components/CardDesign/MultipleCardDesign";
import { dataDesignMock } from "../../DummyData/DataDesignMock";
import { filterDesignTableData } from "../../utils/DummyDataManipulations";
import SingleTableMobile from "../../components/DesignTable/SingleTable/SingleTableMobile";
import { v4 } from "uuid";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useRouter } from "next/router";
import DDTableMultiplePages from "../../components/DesignTable/DesktopDesignTable/DDTableMultiplePages";

type Props = {};

export default function AppDesign({}: Props) {
  const filterCardData = filterCard("app-design", dataDesignMock);
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const route = useRouter();

  return (
    <>
      <HeaderDesign
        title={"App Design"}
        description={
          "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
        }
      />
      <MultipleCardDesign array={filterCardData["app-design"]} />

      <DDTableMultiplePages
        isLaptop={isLaptop}
        isTablet={isTablet}
        route={route}
      />
    </>
  );
}
