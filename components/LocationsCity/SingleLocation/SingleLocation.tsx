import {
  ButtonLocations,
  LocationAvatarPosition,
  TextLocation,
  WrapperSingleLocation,
} from "./SingleLocation.style";
import Image from "next/image";

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
      <ButtonLocations>SEE LOCATION</ButtonLocations>
    </WrapperSingleLocation>
  );
}