import gsap from "gsap";
import { AnimateInputType } from "../types";

export function FocusAnimations(dataToAnimate: AnimateInputType) {
  const { inputSelector, line, placeholderStyleArr } = dataToAnimate;

  inputSelector.forEach((input) => {
    if (input.value.length >= 1) return;
    else {
      gsap.to(line.current, {
        width: "100%",
        height: 3,
        opacity: 1,
        duration: 0.5,
      });
      gsap.to(placeholderStyleArr, { top: 0, left: 10 });
    }
  });
}
