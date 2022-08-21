import React from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { MobileAndTabletViewPT } from "./view/MobileAndTabletViewPT";
import { LaptopViewPt } from "./view/LaptopViewPt";
import { NextRouter } from "next/router";
type Props = { route: NextRouter };

export default function YourProjectTab({ route }: Props) {
  const laptopView = useMediaQuery("(min-width: 1024px)");
  return (
    <>
      {laptopView ? (
        <LaptopViewPt route={route} />
      ) : (
        <MobileAndTabletViewPT route={route} />
      )}
    </>
  );
}
