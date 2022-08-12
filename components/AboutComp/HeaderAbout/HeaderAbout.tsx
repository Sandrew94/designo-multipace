import {
  ContainerImage,
  ContainerTitleAB,
  DescriptionAB,
  TitleAB,
  WrapperHeaderAB,
} from "./HeaderAbout.styles";
import Image from "next/image";
import React from "react";

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
          {idx === 0 ? (
            description
          ) : (
            <>
              {description!
                .split("")
                .splice(0, description!.indexOf("Our" + " team"))
                .join("")}
              <br />
              <br />
              {description!.slice(description!.indexOf("Our team"))}
            </>
          )}
        </DescriptionAB>
        {children}
      </ContainerTitleAB>
    </WrapperHeaderAB>
  );
}
