import gsap from "gsap";
import { AnimateInputType } from "../types";

export function MouseEnterAnimations(dataToAnimate: AnimateInputType) {
  const { inputSelector, line, placeholderStyleArr } = dataToAnimate;

  inputSelector.forEach((input) => {
    if (input.value.length === 0) {
      gsap.fromTo(
        line.current,
        { width: 0, height: 0, opacity: 0.5 },
        { width: "100%", height: 3, opacity: 1, duration: 0.5 }
      );
      gsap.fromTo(
        placeholderStyleArr,
        { top: 18, left: 18 },
        { top: 0, left: 10 }
      );
    }
  });
}
