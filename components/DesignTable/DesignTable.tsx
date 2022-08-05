import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { WrapperMain } from "./DesignTable.style";
import DesktopDesignTable from "./DesktopDesignTable/DesktopDesignTable";
import SingleTable from "./SingleTable/SingleTableMobile";

type Props = {};

export default function DesignTable({}: Props) {
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const textDesign = [
    {
      title: "WEB DESIGN",
      url: isTablet
        ? "/assets/home/tablet/image-web-design.jpg"
        : "/assets/home/mobile/image-web-design.jpg",
    },
    {
      title: "APP DESIGN",
      url: isTablet
        ? "/assets/home/tablet/image-app-design.jpg"
        : "/assets/home/mobile/image-app-design.jpg",
    },
    {
      title: "GRAPHIC DESIGN",
      url: isTablet
        ? "/assets/home/tablet/image-graphic-design.jpg"
        : "/assets/home/mobile/image-graphic-design.jpg",
    },
  ];
  return (
    <WrapperMain>
      {isLaptop ? (
        <DesktopDesignTable />
      ) : (
        textDesign.map((item, idx) => {
          return <SingleTable key={idx} image={item.url} title={item.title} />;
        })
      )}
    </WrapperMain>
  );
}
