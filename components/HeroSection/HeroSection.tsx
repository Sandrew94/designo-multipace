import React from "react";
import { WrapperMain } from "./HeroSection.style";
import SingleHero from "./SingleHero/SingleHero";
import { v4 } from "uuid";
type Props = {};

export default function HeroSection({}: Props) {
  const heroSectionData = [
    {
      title: "PASSIONATE",
      description:
        "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
      url: "/assets/home/desktop/illustration-passionate.svg",
    },
    {
      title: "RESOURCEFUL",
      description:
        "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
      url: "/assets/home/desktop/illustration-resourceful.svg",
    },
    {
      title: "FRIENDLY",
      description:
        " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
      url: "/assets/home/desktop/illustration-friendly.svg",
    },
  ];
  return (
    <WrapperMain>
      {heroSectionData.map((hero) => {
        return (
          <SingleHero
            key={v4()}
            url={hero.url}
            title={hero.title}
            description={hero.description}
          />
        );
      })}
    </WrapperMain>
  );
}
