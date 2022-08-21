import React, { useRef, useState } from "react";
import Image from "next/image";
import LogoImg from "../../public/assets/shared/desktop/logo-dark.png";
import Link from "next/link";
import {
  AStyleTabletOrDesk,
  LogoWrapper,
  RouterWrapper,
  SVGBigFirstPosition,
  Wrapper,
} from "./NavBar.style";
import Sidebar from "./Sidebar/Sidebar";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useRouter } from "next/router";

type Props = {};

export default function NavBar({}: Props) {
  const route = useRouter();
  const isTabletOrDesk = useMediaQuery("(min-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <Wrapper>
      <LogoWrapper>
        {/* <Link href="/"> */}
        <Image src={LogoImg} width={202} height={27} alt="logo-image" />
        {/* </Link> */}
      </LogoWrapper>
      {isTabletOrDesk ? (
        <RouterWrapper>
          <Link href="/">
            <AStyleTabletOrDesk>OUR COMPANY</AStyleTabletOrDesk>
          </Link>
          <Link href="/locations">
            <AStyleTabletOrDesk>LOCATIONS</AStyleTabletOrDesk>
          </Link>
          <Link href="/contact">
            <AStyleTabletOrDesk>CONTACT</AStyleTabletOrDesk>
          </Link>
        </RouterWrapper>
      ) : (
        <Sidebar />
      )}

      {isDesktop ? (
        route.asPath === "/contact" || route.asPath === "/locations" ? (
          ""
        ) : (
          <SVGBigFirstPosition>
            <Image
              src={"/assets/shared/desktop/bg-pattern-leaf.svg"}
              width={1006}
              height={594}
              alt={"big svg desktop"}
            />
          </SVGBigFirstPosition>
        )
      ) : (
        ""
      )}
    </Wrapper>
  );
}
