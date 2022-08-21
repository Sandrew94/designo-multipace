import React from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { TabletOrDesktopViewFB } from "./View/TabletOrDesktopViewFB";
import { MobileViewFB } from "./View/MobileViewFB";
import { NextRouter } from "next/router";

type Props = { route: NextRouter };

export default function FooterBlack({ route }: Props) {
  const tabletOrDeskView = useMediaQuery("(min-width: 768px)");
  return (
    <>
      {tabletOrDeskView ? (
        <TabletOrDesktopViewFB route={route} />
      ) : (
        <MobileViewFB route={route} />
      )}
    </>
  );
}
