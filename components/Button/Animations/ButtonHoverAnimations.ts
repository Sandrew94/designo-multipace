import { NextRouter } from "next/router";
import gsap from "gsap";
import { MutableRefObject } from "react";

export function onMouseEnterAnimations(
  buttonRef: MutableRefObject<null>,
  router: NextRouter
) {
  gsap.fromTo(
    buttonRef.current,
    {
      backgroundColor:
        router.asPath === "/contact" ? "rgba(231,129,107,1)" : "#FFF",
      color:
        router.asPath === "/contact" ? "#FFF" : "rgba(51, 49," + " 54," + " 1)",
    },
    {
      backgroundColor: "#FFAD9B",
      color: "#FFF",
      duration: 0.75,
      ease: "Power2.easeOut",
    }
  );
}

export function onMouseExitAnimations(
  buttonRef: MutableRefObject<null>,
  router: NextRouter
) {
  gsap.fromTo(
    buttonRef.current,
    { backgroundColor: "#FFAD9B", color: "#FFF" },
    {
      backgroundColor:
        router.asPath === "/contact" ? "rgba(231,129,107,1)" : "#FFF",
      color: router.asPath === "/contact" ? "#FFF" : "rgba(51, 49, 54, 1)",
      duration: 0.75,
      ease: "Power2.easeOut",
    }
  );
}
