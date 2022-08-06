import React from "react";
import HeaderDesign from "../../components/HeaderDesign/HeaderDesign";

type Props = {};

export default function AppDesign({}: Props) {
  return (
    <HeaderDesign
      title={"App Design"}
      description={
        "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      }
    />
  );
}
