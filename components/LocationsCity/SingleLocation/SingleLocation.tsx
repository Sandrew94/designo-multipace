import {
  LocationAvatarPosition,
  TextLocation,
  WrapperSingleLocation,
} from "./SingleLocation.style";
import Image from "next/image";
import Link from "next/link";
import ButtonLink from "../../Button/ButtonLink";
import React from "react";

type Props = {
  url: string;
  alt: string;
  nationName: string;
};

export default function SingleLocation({ url, alt, nationName }: Props) {
  return (
    <WrapperSingleLocation>
      <LocationAvatarPosition>
        <Image src={url} width={202} height={202} alt={alt} />
      </LocationAvatarPosition>
      <TextLocation>{nationName}</TextLocation>
      <ButtonLink
        href={"/locations"}
        text={"SEE LOCATION"}
        stylesText={{
          zIndex: 5,
          color: "rgba(255, 255, 255, 1)",
          background: "rgba(231, 129, 107, 1)",
        }}
      />
    </WrapperSingleLocation>
  );
}
