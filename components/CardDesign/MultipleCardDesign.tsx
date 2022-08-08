import CardDesign from "./CardDesign";
import React from "react";
import { LaptopGridView } from "./CardDesign.style";

type Props = {
  array: { url: string; description: string; title: string }[] | undefined;
};

export default function MultipleCardDesign({ array }: Props) {
  return (
    <LaptopGridView>
      {array?.map((card, idx) => {
        return (
          <CardDesign
            key={idx + card.title}
            url={card.url}
            description={card.description}
            title={card.title}
          />
        );
      })}
    </LaptopGridView>
  );
}
