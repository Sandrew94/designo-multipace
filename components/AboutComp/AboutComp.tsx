import {
  AboutWrapper,
  SVGPositionH1AB,
  SVGPositionH2AB,
} from "./AboutComp.styles";
import HeaderAbout from "./HeaderAbout/HeaderAbout";
import React from "react";
import { v4 } from "uuid";
import useMediaQuery from "../../hooks/useMediaQuery";

type Props = {};

export default function AboutComp(props: Props) {
  const isTablet = useMediaQuery("(min-width: 768px)");
  const dataAboutComponent = [
    {
      title: "About Us",
      description:
        "Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.",
      imgSrc: isTablet
        ? "/assets/about/tablet/image-about-hero.jpg"
        : "/assets/about/mobile/image-about-hero.jpg",
      altText: "Header Image",
    },
    {
      title: "World-class talent",
      description:
        "We are a crew of strategists, problem-solvers, and" +
        " technologists. Every design is thoughtfully crafted from" +
        " concept to launch, ensuring success in its given market." +
        " We are constantly updating our skills in a myriad of" +
        " platforms." +
        "Our team is multi-disciplinary and we are not merely" +
        " interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.",
      imgSrc: isTablet
        ? "/assets/about/tablet/image-world-class-talent.jpg"
        : "/assets/about/mobile/image-world-class-talent.jpg",
      altText: "Header-2 Image",
    },
  ];
  return (
    <AboutWrapper>
      {dataAboutComponent.map((item, idx) => {
        return (
          <HeaderAbout
            key={v4()}
            description={item.description}
            imgSrc={item.imgSrc}
            title={item.title}
            altText={item.altText}
            idx={idx}
          >
            {idx === 0 ? (
              <SVGPositionH1AB>
                <svg
                  width="876"
                  height="946"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
                      <stop stopColor="#5D0202" stopOpacity="0" offset="0%" />
                      <stop
                        stopColor="#5D0202"
                        stopOpacity=".498"
                        offset="100%"
                      />
                    </linearGradient>
                  </defs>
                  <g
                    transform="matrix(1 0 0 -1 0 946)"
                    fill="none"
                    fillRule="evenodd"
                    opacity=".309"
                  >
                    <circle
                      fill="url(#a)"
                      transform="scale(-1 1) rotate(-90 0 1529.37)"
                      cx="730"
                      cy="799.37"
                      r="146"
                    />
                    <circle
                      fill="url(#a)"
                      transform="matrix(-1 0 0 1 876 0)"
                      cx="438"
                      cy="799.37"
                      r="146"
                    />
                    <circle
                      transform="matrix(0 1 1 0 -653.37 653.37)"
                      cx="146"
                      cy="799.37"
                      r="146"
                    />
                    <circle
                      transform="matrix(0 -1 -1 0 876.63 876.63)"
                      cx="730"
                      cy="146.63"
                      r="146"
                    />
                    <circle
                      transform="matrix(-1 0 0 1 876 0)"
                      cx="438"
                      cy="146.63"
                      r="146"
                    />
                  </g>
                </svg>
              </SVGPositionH1AB>
            ) : (
              <SVGPositionH2AB>
                <svg
                  width="876"
                  height="584"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
                      <stop stopColor="#5D0202" stopOpacity="0" offset="0%" />
                      <stop
                        stopColor="#5D0202"
                        stopOpacity=".498"
                        offset="100%"
                      />
                    </linearGradient>
                  </defs>
                  <g
                    transform="matrix(-1 0 0 1 876 0)"
                    fill="url(#a)"
                    fillRule="evenodd"
                    opacity=".06"
                  >
                    <g transform="translate(0 292)">
                      <circle
                        transform="matrix(0 -1 -1 0 292 292)"
                        cx="146"
                        cy="146"
                        r="146"
                      />
                      <circle
                        transform="matrix(-1 0 0 1 876 0)"
                        cx="438"
                        cy="146"
                        r="146"
                      />
                      <circle
                        transform="matrix(0 1 1 0 584 -584)"
                        cx="730"
                        cy="146"
                        r="146"
                      />
                    </g>
                    <circle
                      transform="matrix(0 -1 -1 0 292 292)"
                      cx="146"
                      cy="146"
                      r="146"
                    />
                    <circle
                      transform="matrix(-1 0 0 1 876 0)"
                      cx="438"
                      cy="146"
                      r="146"
                    />
                  </g>
                </svg>
              </SVGPositionH2AB>
            )}
          </HeaderAbout>
        );
      })}
    </AboutWrapper>
  );
}
