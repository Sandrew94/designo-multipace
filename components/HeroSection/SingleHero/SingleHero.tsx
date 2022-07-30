import React from "react";
import {
  PositionHeroImage,
  TitleDescription,
  TitleHero,
  WrapperHero,
} from "../HeroSection.style";
import Image from "next/image";

type Props = {
  url: string;
  title: string;
  description: string;
};

export default function SingleHero({
  url,
  title,
  description,
}: Props) {
  return (
    <WrapperHero>
      <PositionHeroImage>
        <Image
          src={url}
          width={202}
          height={202}
        />
      </PositionHeroImage>
      <TitleHero>{title}</TitleHero>
      <TitleDescription>
        {description}
      </TitleDescription>
    </WrapperHero>
  );
}
