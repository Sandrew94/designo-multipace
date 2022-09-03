import React from "react";
import Image from "next/image";
import {
  ContainerHH,
  HeroPhone,
  SVGPosition,
  TextDescriptionHH,
  TextTitleHH,
} from "../HeaderHome.style";
import BackgroundPartner from "/public/assets/home/desktop/bg-pattern-hero-home.svg";
import FramePhone from "/public/assets/home/desktop/image-hero-phone.png";
import ButtonLink from "../../Button/ButtonLink";

type Props = {};

export default function LaptopView({}: Props) {
  return (
    <>
      <SVGPosition>
        <Image
          width={640}
          height={640}
          src={BackgroundPartner}
          priority={true}
          alt={"Background image"}
        />
      </SVGPosition>
      <ContainerHH>
        <TextTitleHH>
          Award-winning custom designs and digital branding solutions
        </TextTitleHH>
        <TextDescriptionHH>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </TextDescriptionHH>
        <ButtonLink
          href={"/about"}
          text={"LEARN MORE"}
          stylesText={{
            zIndex: 5,
            marginLeft: "10rem",
          }}
        />
      </ContainerHH>
      <HeroPhone>
        <Image src={FramePhone} layout="fixed" alt={"Background image"} />
      </HeroPhone>
    </>
  );
}
