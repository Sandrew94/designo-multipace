import React from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { TabletOrDesktopViewFB } from "./View/TabletOrDesktopViewFB";
import { MobileViewFB } from "./View/MobileViewFB";

type Props = {};

export default function FooterBlack({}: Props) {
  const tabletOrDeskView = useMediaQuery("(min-width: 768px)");
  return <>{tabletOrDeskView ? <TabletOrDesktopViewFB /> : <MobileViewFB />}</>;
}
