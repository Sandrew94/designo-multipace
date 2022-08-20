import gsap from "gsap";
import { AnimateInputType } from "../types";

export function MouseLeaveAnimations(dataToAnimate: AnimateInputType) {
  const { inputSelector, line, placeholderStyleArr } = dataToAnimate;

  inputSelector.forEach((input) => {
    if (input.value.length === 0) {
      gsap.fromTo(
        line.current,
        { width: "100%", height: 3, opacity: 1, duration: 0.5 },
        { width: "100%", height: 1, opacity: 0.5 }
      );
      gsap.fromTo(
        placeholderStyleArr,
        { top: 0, left: 10 },
        { top: 18, left: 18 }
      );
    }
  });
}
