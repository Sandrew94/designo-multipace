import {
  HeaderDesignDescription,
  HeaderDesignTitle,
  SVGPositionHD,
  WrapperHeaderDesign,
} from "./HeaderDesign.style";
import useMediaQuery from "../../hooks/useMediaQuery";

type Props = { title: string; description: string };

export default function HeaderDesign({ title, description }: Props) {
  const tabletAndDesktopView = useMediaQuery("(min-width: 768px)");
  return (
    <WrapperHeaderDesign className={"animate-headerDesign"}>
      <HeaderDesignTitle>{title}</HeaderDesignTitle>
      <HeaderDesignDescription>{description}</HeaderDesignDescription>
      <SVGPositionHD>
        {tabletAndDesktopView ? (
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
              <circle
                transform="matrix(0 1 1 0 584 -584)"
                cx="730"
                cy="146"
                r="146"
                opacity=".309"
              />
            </g>
          </svg>
        ) : (
          <svg width="584" height="292" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
                <stop stopColor="#5D0202" stopOpacity="0" offset="0%" />
                <stop stopColor="#5D0202" stopOpacity=".498" offset="100%" />
              </linearGradient>
            </defs>
            <g
              className="circle1"
              fill="url(#a)"
              fillRule="evenodd"
              opacity=".06"
            >
              <circle
                transform="matrix(1 0 0 -1 0 292)"
                cx="146"
                cy="146"
                r="146"
              />
            </g>
            <g
              className="circle2"
              fill="url(#a)"
              fillRule="evenodd"
              opacity=".16"
            >
              <circle
                transform="matrix(0 1 1 0 292 -292)"
                cx="438"
                cy="146"
                r="146"
              />
            </g>
          </svg>
        )}
      </SVGPositionHD>
    </WrapperHeaderDesign>
  );
}
