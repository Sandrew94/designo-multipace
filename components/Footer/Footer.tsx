import React from "react";
import { WrapperFooter } from "./Footer.style";
import FooterBlack from "./FooterBlack/FooterBlack";
import YourProjectTab from "./YourProjectTab/YourProjectTab";

type Props = {};

export default function Footer({}: Props) {
  return (
    <WrapperFooter>
      <YourProjectTab />
      <FooterBlack />
    </WrapperFooter>
  );
}
