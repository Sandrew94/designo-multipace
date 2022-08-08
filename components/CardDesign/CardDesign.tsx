import {
  PositionImageCD,
  TextDescription,
  TextTitleCD,
  WrapperCD,
  WrapperTextFooter,
} from "./CardDesign.style";
import Image from "next/image";

type Props = {
  url: string;
  title: string;
  description: string;
};

export default function CardDesign({ url, title, description }: Props) {
  return (
    <WrapperCD>
      <PositionImageCD>
        <Image
          width={327}
          height={320}
          layout={"responsive"}
          src={url}
          alt={title}
          priority
        />
      </PositionImageCD>
      <WrapperTextFooter>
        <TextTitleCD>{title}</TextTitleCD>
        <TextDescription>{description}</TextDescription>
      </WrapperTextFooter>
    </WrapperCD>
  );
}
