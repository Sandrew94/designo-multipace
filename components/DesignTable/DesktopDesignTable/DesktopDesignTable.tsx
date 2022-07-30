import React from "react";
import {
  WrapperBigTable,
  WrapperDesktop,
  WrapperGrAndAppDesign,
} from "../DesignTable.style";
import SingleTable from "../SingleTable/SingleTableMobile";

type Props = {};

export default function DesktopDesignTable({}: Props) {
  return (
    <WrapperDesktop>
      <WrapperBigTable>
        <SingleTable
          image={
            "/assets/home/desktop/image-web-design-large.jpg"
          }
          title={"WEB DESIGN"}
          width="100%"
          height="100%"
        />
      </WrapperBigTable>
      <WrapperGrAndAppDesign>
        <SingleTable
          image={
            "/assets/home/desktop/image-app-design.jpg"
          }
          title={"WEB DESIGN"}
          width="95%"
          height="100%"
        />
        <SingleTable
          image={
            "/assets/home/desktop/image-graphic-design.jpg"
          }
          title={"WEB DESIGN"}
          width="95%"
          height="100%"
        />
      </WrapperGrAndAppDesign>
    </WrapperDesktop>
  );
}
