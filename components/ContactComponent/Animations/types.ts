import React from "react";

export type AnimateInputType = {
  inputSelector: HTMLInputElement[];
  line: React.MutableRefObject<null>;
  placeholderStyleArr: HTMLElementTagNameMap[keyof HTMLElementTagNameMap][];
};

export type AnimateTextAreaType = {
  textarea: React.MutableRefObject<HTMLTextAreaElement | null>;
  line: React.MutableRefObject<null>;
  placeholder: React.MutableRefObject<null>;
};
