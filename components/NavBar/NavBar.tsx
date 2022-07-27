import React, { useState } from "react";
import Image from "next/image";
import LogoImg from "../../public/assets/shared/desktop/logo-dark.png";

import Link from "next/link";
import {
  LogoWrapper,
  Wrapper,
} from "./NavBar.style";
import Sidebar from "./Sidebar/Sidebar";

type Props = {};

export default function NavBar({}: Props) {
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
      <Sidebar />
    </Wrapper>
  );
}
