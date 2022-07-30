import React from "react";
import {
  SvgArrowPos,
  TextDescriptionPJ,
  TextDesignTitle,
  WrapperTable,
} from "../DesignTable.style";
import Image from "next/image";

import svgRightArrow from "../../../public/assets/shared/desktop/icon-right-arrow.svg";

type Props = {
  image: string;
  title: string;
};

export default function SingleTable({
  image,
  title,
}: Props) {
  return (
    <WrapperTable>
      <Image
        src={image}
        layout="fill"
        objectFit="cover"
      />
      <TextDesignTitle>{title}</TextDesignTitle>
      <TextDescriptionPJ>
        VIEW PROJECTS
        <SvgArrowPos>
          <Image
            src={svgRightArrow}
            width="7px"
            height="10px"
          />
        </SvgArrowPos>
      </TextDescriptionPJ>
    </WrapperTable>
  );
}
