import {
  ContainerImage,
  ContainerTitleAB,
  DescriptionAB,
  TitleAB,
  WrapperHeader1,
} from "./HeaderAbout.styles";
import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
  imgSrc: string;
  altText: string;
  idx: number;
  children: React.ReactNode;
};

export default function HeaderAbout({
  title,
  description,
  imgSrc,
  altText,
  children,
  idx,
}: Props) {
  return (
    <WrapperHeader1>
      <ContainerImage>
        <Image
          src={imgSrc}
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
          {idx === 0 ? (
            description
          ) : (
            <>
              {description
                .split("")
                .splice(0, description.indexOf("Our" + " team"))
                .join("")}
              <br />
              <br />
              {description.slice(description.indexOf("Our team"))}
            </>
          )}
        </DescriptionAB>
        {children}
      </ContainerTitleAB>
    </WrapperHeader1>
  );
}
