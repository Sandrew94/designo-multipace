import React from "react";
import {
  ContainerHeroText,
  PositionHeroImage,
  TitleDescription,
  TitleHero,
  WrapperHero,
} from "../HeroSection.style";
import Image from "next/image";
import useMediaQuery from "../../../hooks/useMediaQuery";

type Props = {
  url: string;
  title: string;
  description: string;
};

export default function SingleHero({ url, title, description }: Props) {
  const isTablet = useMediaQuery("(min-width:768px)");

  return (
    <WrapperHero>
      <PositionHeroImage>
        <Image src={url} width={202} height={202} alt={"hero image"} />
      </PositionHeroImage>
      {isTablet ? (
        <ContainerHeroText>
          <TitleHero>{title}</TitleHero>
          <TitleDescription>{description}</TitleDescription>
        </ContainerHeroText>
      ) : (
        //Mobile
        <>
          <TitleHero>{title}</TitleHero>
          <TitleDescription>{description}</TitleDescription>
        </>
      )}
    </WrapperHero>
  );
}
