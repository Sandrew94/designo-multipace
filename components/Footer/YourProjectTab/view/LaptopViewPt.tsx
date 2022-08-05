import * as React from "react";
import {
  PtDescription,
  PtSvgPosition,
  PtTitle,
  TextContainer,
  WrapperPT,
} from "../../Footer.style";
import ButtonLink from "../../../Button/ButtonLink";

type Props = {};
export const LaptopViewPt = (props: Props) => {
  return (
    <WrapperPT>
      <PtSvgPosition>
        <svg width="876" height="584" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
              <stop stopColor="#5D0202" stopOpacity="0" offset="0%" />
              <stop stopColor="#5D0202" stopOpacity=".498" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="matrix(-1 0 0 1 876 0)"
            fill="url(#a)"
            fillRule="evenodd"
            opacity=".309"
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
      </PtSvgPosition>
      <TextContainer>
        <PtTitle>Let’s talk about your project</PtTitle>
        <PtDescription>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </PtDescription>
      </TextContainer>

      <ButtonLink
        href={"/contact"}
        text={"GET IN TOUCH"}
        stylesText={{
          position: "relative",
          zIndex: 3,
        }}
      />
    </WrapperPT>
  );
};
