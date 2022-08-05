import React from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { MobileAndTabletViewPT } from "./view/MobileAndTabletViewPT";
import { LaptopViewPt } from "./view/LaptopViewPt";
type Props = {};

export default function YourProjectTab({}: Props) {
  const laptopView = useMediaQuery("(min-width: 1024px)");
  return <>{laptopView ? <LaptopViewPt /> : <MobileAndTabletViewPT />}</>;
}
