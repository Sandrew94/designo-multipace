import React, { useRef, useState } from "react";
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
import gsap from "gsap";

type Props = {};

export default function Sidebar({}: Props) {
  const sidebarRef = useRef(null);
  const [displayStyle, setDisplayStyle] = useState(false);

  const handleDisplaySidebar = () => {
    setDisplayStyle(!displayStyle);

    gsap.fromTo(
      sidebarRef.current,
      { opacity: 0, height: 0 },
      { opacity: 1, height: 235, ease: "Circ.easeOut", duration: 1 }
    );
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
      <SidebarRight displayStyle={displayStyle} ref={sidebarRef}>
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
