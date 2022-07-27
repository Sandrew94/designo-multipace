import React from "react";
import Image from "next/image";
import LogoImg from "../../public/assets/shared/desktop/logo-dark.png";
import iconHamb from "../../public/assets/shared/mobile/icon-hamburger.svg";
import {
  LogoText,
  LogoWrapper,
  Sidebar,
  Wrapper,
} from "./NavBar.style";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <Wrapper>
      <LogoWrapper>
        <Image
          src={LogoImg}
          width={202}
          height={27}
          alt="logo-image"
        />
        {/* <LogoText>DESIGNO</LogoText> */}
      </LogoWrapper>
      <Sidebar>
        <Image
          src={iconHamb}
          width={24}
          height={20}
          alt="logo-image"
        />
      </Sidebar>
    </Wrapper>
  );
}
