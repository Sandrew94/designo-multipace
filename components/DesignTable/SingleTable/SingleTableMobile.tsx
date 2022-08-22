import React from "react";
import {
  SvgArrowPos,
  TextDescriptionPJ,
  TextDesignTitle,
  WrapperTable,
} from "../DesignTable.style";
import Image from "next/image";

import svgRightArrow from "../../../public/assets/shared/desktop/icon-right-arrow.svg";
import Link from "next/link";

type Props = {
  image: string;
  title: string;
  width?: string;
  height?: string;
};

export default function SingleTable({
  image,
  title,
  width = "54.1rem", //desktop default
  height = "30.8rem", //desktop default
}: Props) {
  const linkToPage = title.toLowerCase().split(" ").join("-");
  return (
    <WrapperTable
      width={width}
      height={height}
      className={"animate-designTable"}
    >
      <Image src={image} layout="fill" objectFit="cover" alt={"photo"} />
      <Link href={linkToPage}>
        <TextDesignTitle>{title}</TextDesignTitle>
      </Link>
      <TextDescriptionPJ>
        VIEW PROJECTS
        <SvgArrowPos>
          <Image
            src={svgRightArrow}
            width="7px"
            height="10px"
            alt={"photo12"}
          />
        </SvgArrowPos>
      </TextDescriptionPJ>
    </WrapperTable>
  );
}
