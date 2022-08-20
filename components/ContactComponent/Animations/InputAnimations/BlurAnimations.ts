import gsap from "gsap";
import { AnimateInputType } from "../types";

export function BlurAnimations(dataToAnimate: AnimateInputType) {
  const { inputSelector, line, placeholderStyleArr } = dataToAnimate;

  inputSelector.forEach((input) => {
    if (input.value.length >= 1) {
      gsap.to(line.current, {
        width: "100%",
        height: 3,
        opacity: 1,
        duration: 0.5,
      });
    } else {
      gsap.to(line.current, {
        width: "100%",
        height: 1,
        opacity: 0.5,
        duration: 0.5,
      });

      gsap.to(placeholderStyleArr, { top: 18, left: 18 });
    }
  });
}
