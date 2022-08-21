import React from "react";
import { WrapperFooter } from "./Footer.style";
import FooterBlack from "./FooterBlack/FooterBlack";
import YourProjectTab from "./YourProjectTab/YourProjectTab";
import { useRouter } from "next/router";

export default function Footer() {
  const route = useRouter();
  return (
    <WrapperFooter>
      <YourProjectTab route={route} />
      <FooterBlack route={route} />
    </WrapperFooter>
  );
}
