import gsap from "gsap";
import { AnimateTextAreaType } from "../types";

export function BlurTextAreaAnimations(RefObj: AnimateTextAreaType) {
  const { textarea, line, placeholder } = RefObj;
  if (textarea.current!.value.length >= 1) {
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

    gsap.to(placeholder.current, { top: 0, left: 18 });
  }
}
