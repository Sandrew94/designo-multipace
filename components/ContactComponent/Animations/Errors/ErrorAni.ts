//Error popup
import { tlError } from "../index";
import React from "react";

export function errorAnimationHandler(errorRef: React.MutableRefObject<null>) {
  tlError.fromTo(
    errorRef.current,
    { right: -30, opacity: 0 },
    { right: 0, opacity: 1, duration: 0.5 }
  );
}
