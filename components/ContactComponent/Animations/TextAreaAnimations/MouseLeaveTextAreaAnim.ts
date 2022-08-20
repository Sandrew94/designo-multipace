import gsap from "gsap";
import React from "react";
import { AnimateTextAreaType } from "../types";

export function MouseLeaveTextAreaAnim(RefObj: AnimateTextAreaType) {
  const { textarea, line, placeholder } = RefObj;
  if (textarea.current!.value.length === 0) {
    gsap.fromTo(
      line.current,
      { width: "100%", height: 3, opacity: 1, duration: 0.5 },
      { width: "100%", height: 1, opacity: 0.5 }
    );
    gsap.fromTo(
      placeholder.current,
      { top: 130, left: 18 },
      { top: 0, left: 10 }
    );
  }
}
