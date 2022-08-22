import React from "react";

type Props = {
  description: string | undefined;
  startBR: string;
};

export default function StringDividerAtIndex({ description, startBR }: Props) {
  return (
    <>
      {!description
        ? ""
        : description!
            .split("")
            .splice(0, description!.indexOf(startBR))
            .join("")}
      <br />
      <br />
      {!description ? "" : description!.slice(description!.indexOf(startBR))}
    </>
  );
}
