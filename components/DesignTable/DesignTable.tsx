import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { WrapperMain } from "./DesignTable.style";
import DesktopDesignTableHome from "./DesktopDesignTable/DesktopDesignTableHome";
import { useRouter } from "next/router";
import DDTableMultiplePages from "./DesktopDesignTable/DDTableMultiplePages";

type Props = {};

export default function DesignTable({}: Props) {
  const route = useRouter();
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isLaptop = useMediaQuery("(min-width: 1024px)");

  return (
    <WrapperMain className={"animate-designTable"}>
      {isLaptop ? (
        <DesktopDesignTableHome />
      ) : (
        <DDTableMultiplePages
          isTablet={isTablet}
          isLaptop={isLaptop}
          route={route}
        />
      )}
    </WrapperMain>
  );
}
