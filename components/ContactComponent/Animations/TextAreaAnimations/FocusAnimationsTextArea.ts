import gsap from "gsap";
import { AnimateTextAreaType } from "../types";

export function FocusAnimationsTextArea(RefObj: AnimateTextAreaType) {
  const { textarea, line, placeholder } = RefObj;
  if (textarea.current!.value.length >= 1) return;
  else {
    gsap.to(line.current, {
      width: "100%",
      height: 3,
      opacity: 1,
      duration: 0.5,
    });
    gsap.to(placeholder.current, { top: 130, left: 18 });
  }
}
