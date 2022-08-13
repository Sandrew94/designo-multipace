import {
  ContainerImage,
  ContainerTitleAB,
  DescriptionAB,
  TitleAB,
  WrapperHeaderAB,
} from "./HeaderAbout.styles";
import Image from "next/image";
import React from "react";
import StringDividerAtIndex from "../../../utils/StringDividerAtIndex";

type Props = {
  title: string;
  description?: string;
  url: string;
  altText?: string;
  idx: number;
  children: React.ReactNode;
};

export default function HeaderAbout({
  title,
  description,
  url,
  altText,
  children,
  idx,
}: Props) {
  return (
    <WrapperHeaderAB idx={idx}>
      <ContainerImage idx={idx}>
        <Image
          src={url}
          alt={altText}
          width={375}
          height={320}
          layout={"responsive"}
          priority
        />
      </ContainerImage>
      <ContainerTitleAB idx={idx}>
        <TitleAB idx={idx}>{title}</TitleAB>
        <DescriptionAB idx={idx}>
          {idx === 2 ? (
            <StringDividerAtIndex
              description={description}
              startBR={"We are"}
            /> //Index 2
          ) : idx === 0 ? (
            description //Index 0
          ) : (
            <StringDividerAtIndex
              description={description}
              startBR={"Our team"}
            /> //Index 1
          )}
        </DescriptionAB>
        {children}
      </ContainerTitleAB>
    </WrapperHeaderAB>
  );
}
