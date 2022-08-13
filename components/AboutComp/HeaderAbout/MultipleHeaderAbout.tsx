import HeaderAbout from "./HeaderAbout";
import { v4 } from "uuid";
import { SVGPositionH1AB, SVGPositionH2AB } from "../AboutComp.styles";
import React from "react";
import { useRouter } from "next/router";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { filterDesignTableData } from "../../../utils/DummyDataManipulations";

type Props = {};

export default function MultipleHeaderAbout(props: Props) {
  const route = useRouter();
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isLaptop = useMediaQuery("(min-width: 1024px)");

  const dataAboutComponent = filterDesignTableData(
    isTablet,
    route.asPath,
    isLaptop
  );

  return (
    <>
      {dataAboutComponent.map((item, idx) => {
        return (
          <HeaderAbout
            key={v4()}
            description={item.description}
            url={item.url}
            title={item.title}
            altText={item.altText}
            idx={idx}
          >
            {idx === 0 ? (
              <SVGPositionH1AB>
                {isLaptop ? (
                  <svg
                    width="640"
                    height="640"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        x1="0%"
                        y1="50%"
                        x2="100%"
                        y2="50%"
                        id="a"
                      >
                        <stop stopColor="#5D0202" stopOpacity="0" offset="0%" />
                        <stop
                          stopColor="#5D0202"
                          stopOpacity=".498"
                          offset="100%"
                        />
                      </linearGradient>
                    </defs>
                    <circle
                      fill="url(#a)"
                      transform="matrix(1 0 0 -1 0 640)"
                      cx="320"
                      cy="320"
                      r="320"
                      fillRule="evenodd"
                      opacity=".309"
                    />
                  </svg>
                ) : (
                  <svg
                    width="876"
                    height="946"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        x1="0%"
                        y1="50%"
                        x2="100%"
                        y2="50%"
                        id="a"
                      >
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
                )}
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
    </>
  );
}
