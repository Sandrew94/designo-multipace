import React, { useState } from "react";
import iconHamb from "/public/assets/shared/mobile/icon-hamburger.svg";
import crossIcon from "/public/assets/shared/mobile/icon-close.svg";
import Link from "next/link";
import Image from "next/image";
import {
  AStyle,
  BackgroundActive,
  SidebarRight,
  SidebarStyle,
} from "../NavBar.style";

type Props = {};

export default function Sidebar({}: Props) {
  const [displayStyle, setDisplayStyle] = useState(false);

  const handleDisplaySidebar = () => {
    setDisplayStyle(!displayStyle);
  };
  return (
    <SidebarStyle onClick={handleDisplaySidebar}>
      {displayStyle ? (
        <>
          <BackgroundActive />
          <Image
            src={crossIcon}
            width={24}
            height={20}
            alt="logo-image-close"
          />
        </>
      ) : (
        <Image src={iconHamb} width={24} height={20} alt="logo-image-open" />
      )}
      <SidebarRight displayStyle={displayStyle}>
        <Link href="/">
          <AStyle>OUR COMPANY</AStyle>
        </Link>
        <Link href="/locations">
          <AStyle>LOCATIONS</AStyle>
        </Link>
        <Link href="/contact">
          <AStyle>CONTACT</AStyle>
        </Link>
      </SidebarRight>
    </SidebarStyle>
  );
}
