import * as React from "react";
import {
  DescribeParagraph,
  Divider,
  DPLocations,
  DPTitle,
  FooterLogo,
  FooterLogoStyles,
  InfoLinkContainer,
  InfoLinkStyle,
  WrapperBlack,
  WrapperSocial,
} from "../../Footer.style";
import Image from "next/image";
import Link from "next/link";
import { NextRouter } from "next/router";

type Props = { route: NextRouter };
export const MobileViewFB = ({ route }: Props) => {
  return (
    <WrapperBlack pageName={route.asPath}>
      <FooterLogo>
        <Image
          src="/assets/extra-images/Oval.png"
          width={24}
          height={24}
          alt={"Footer Logo"}
        />
        <FooterLogoStyles>DESIGNO</FooterLogoStyles>
      </FooterLogo>
      <InfoLinkContainer>
        <Divider />
        <Link href={"/about"} passHref>
          <InfoLinkStyle>OUR COMPANY</InfoLinkStyle>
        </Link>
        <Link href={"/locations"} passHref>
          <InfoLinkStyle>LOCATIONS</InfoLinkStyle>
        </Link>
        <Link href={"/contact"} passHref>
          <InfoLinkStyle>CONTACT</InfoLinkStyle>
        </Link>
      </InfoLinkContainer>
      <DescribeParagraph>
        <DPTitle>Designo Central Office</DPTitle>
        <DPLocations>3886 Wellington Street</DPLocations>
        <DPLocations>Toronto, Ontario M9C 3J5</DPLocations>
      </DescribeParagraph>
      <DescribeParagraph>
        <DPTitle>Contact Us (Central Office)</DPTitle>
        <DPLocations>P : +1 253-863-8967</DPLocations>
        <DPLocations>M : contact@designo.co</DPLocations>
      </DescribeParagraph>
      <WrapperSocial>
        <Image
          src={"/assets/shared/desktop/icon-facebook.svg"}
          width={24}
          height={24}
          alt={"iconFacebook"}
        />
        <Image
          src={"/assets/shared/desktop/icon-youtube.svg"}
          width={24}
          height={24}
          alt={"iconYoutube"}
        />
        <Image
          src={"/assets/shared/desktop/icon-twitter.svg"}
          width={24}
          height={24}
          alt={"iconTwitter"}
        />
        <Image
          src={"/assets/shared/desktop/icon-pinterest.svg"}
          width={24}
          height={24}
          alt={"iconPinterest"}
        />
        <Image
          src={"/assets/shared/desktop/icon-instagram.svg"}
          width={24}
          height={24}
          alt={"iconInstagram"}
        />
      </WrapperSocial>
    </WrapperBlack>
  );
};
