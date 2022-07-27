import React, { useState } from "react";
import Image from "next/image";
import LogoImg from "../../public/assets/shared/desktop/logo-dark.png";
import Link from "next/link";
import {
  AStyleTabletOrDesk,
  LogoWrapper,
  RouterWrapper,
  Wrapper,
} from "./NavBar.style";
import Sidebar from "./Sidebar/Sidebar";
import useMediaQuery from "../../hooks/useMediaQuery";

type Props = {};

export default function NavBar({}: Props) {
  const isTabletOrDesk = useMediaQuery(
    "(min-width: 768px)"
  );

  return (
    <Wrapper>
      <LogoWrapper>
        {/* <Link href="/"> */}
        <Image
          src={LogoImg}
          width={202}
          height={27}
          alt="logo-image"
        />
        {/* </Link> */}
      </LogoWrapper>
      {isTabletOrDesk ? (
        <RouterWrapper>
          <Link href="/web-design">
            <AStyleTabletOrDesk>
              OUR COMPANY
            </AStyleTabletOrDesk>
          </Link>
          <Link href="/locations">
            <AStyleTabletOrDesk>
              LOCATIONS
            </AStyleTabletOrDesk>
          </Link>
          <Link href="/contact">
            <AStyleTabletOrDesk>
              CONTACT
            </AStyleTabletOrDesk>
          </Link>
        </RouterWrapper>
      ) : (
        <Sidebar />
      )}
    </Wrapper>
  );
}
