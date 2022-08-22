import CardDesign from "./CardDesign";
import React from "react";
import { LaptopGridView } from "./CardDesign.style";
import { v4 } from "uuid";

type Props = {
  array: { url: string; description: string; title: string }[] | undefined;
};

export default function MultipleCardDesign({ array }: Props) {
  return (
    <LaptopGridView className={"animate-cardGallery"}>
      {array?.map((card, idx) => {
        return (
          <CardDesign
            key={v4()}
            url={card.url}
            description={card.description}
            title={card.title}
          />
        );
      })}
    </LaptopGridView>
  );
}
