import { MutableRefObject } from "react";
import gsap from "gsap";

export function onEnterSubmitButton(submitRef: MutableRefObject<null>) {
  gsap.fromTo(
    submitRef.current,
    {
      backgroundColor: "#FFF",
      color: "rgba(51, 49, 54, 1)",
    },
    {
      backgroundColor: "#FFAD9B",
      color: "#FFF",
      duration: 0.75,
      ease: "Power2.easeOut",
    }
  );
}

export function onExitSubmitButton(submitRef: MutableRefObject<null>) {
  gsap.fromTo(
    submitRef.current,
    { backgroundColor: "#FFAD9B", color: "#FFF" },
    {
      backgroundColor: "#FFF",
      color: "rgba(51, 49, 54, 1)",
      duration: 0.75,
      ease: "Power2.easeOut",
    }
  );
}
