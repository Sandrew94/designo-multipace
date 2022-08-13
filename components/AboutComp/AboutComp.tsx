import { AboutWrapper } from "./AboutComp.styles";
import React from "react";
import MultipleHeaderAbout from "./HeaderAbout/MultipleHeaderAbout";
import LocationsCity from "../LocationsCity/LocationsCity";

type Props = {};

export default function AboutComp(props: Props) {
  return (
    <AboutWrapper>
      <MultipleHeaderAbout />
      <LocationsCity />
    </AboutWrapper>
  );
}
