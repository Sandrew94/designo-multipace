import {
  FormikErrorStyle,
  InputStyle,
  LabelStyle,
  LinePosition,
  PlaceholderPosition,
  PlaceholderStyle,
  WrapperFormikError,
} from "../InputContact.style";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
import gsap from "gsap";
import React from "react";
import { errorAnimationHandler } from "../../Animations/Errors/ErrorAni";
import { MouseLeaveAnimations } from "../../Animations/InputAnimations/MauseLeaveAnimations";
import { MouseEnterAnimations } from "../../Animations/InputAnimations/MouseEnterAnimations";
import { FocusAnimations } from "../../Animations/InputAnimations/FocusAnimations";
import { BlurAnimations } from "../../Animations/InputAnimations/BlurAnimations";

type Props = {
  handleError: boolean | string | undefined;
  errorMessage?: string;
  formikHandleChange: (e: ChangeEvent<any>) => void;
  formikValue: string;
  inputName: string;
  placeholder: string;
  type: string;
};

function SingleInput({
  handleError,
  errorMessage,
  formikHandleChange,
  formikValue,
  inputName,
  placeholder,
  type,
}: Props) {
  const errorRef = useRef(null);
  const line = useRef(null);
  const component = useRef(null);
  let q = gsap.utils.selector(component);

  React.useEffect(() => {
    errorAnimationHandler(errorRef);
  }, [handleError]);

  const onMouseLeave = () => {
    const inputSelector = q("input") as HTMLInputElement[];

    const dataToAnimate = {
      inputSelector,
      line,
      placeholderStyleArr: q(".placeholderStyle"),
    };

    MouseLeaveAnimations(dataToAnimate);
  };

  const onMouseEnter = () => {
    const inputSelector = q("input") as HTMLInputElement[];

    const dataToAnimate = {
      inputSelector,
      line,
      placeholderStyleArr: q(".placeholderStyle"),
    };

    MouseEnterAnimations(dataToAnimate);
  };

  const handleFocusAnimations = () => {
    const inputSelector = q("input") as HTMLInputElement[];
    const dataToAnimate = {
      inputSelector,
      line,
      placeholderStyleArr: q(".placeholderStyle"),
    };
    FocusAnimations(dataToAnimate);
  };

  const handleBlur = () => {
    const inputSelector = q("input") as HTMLInputElement[];
    const dataToAnimate = {
      inputSelector,
      line,
      placeholderStyleArr: q(".placeholderStyle"),
    };
    BlurAnimations(dataToAnimate);
  };

  return (
    <LabelStyle
      htmlFor={inputName}
      ref={component}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <InputStyle
        id={inputName}
        name={inputName}
        type={type}
        onChange={formikHandleChange}
        value={formikValue}
        onFocus={handleFocusAnimations}
        onBlur={handleBlur}
      />
      <LinePosition ref={line}>
        <PlaceholderPosition className={"placeholderStyle"}>
          <PlaceholderStyle>{placeholder}</PlaceholderStyle>
        </PlaceholderPosition>
      </LinePosition>
      {handleError ? (
        <WrapperFormikError ref={errorRef}>
          <FormikErrorStyle>{errorMessage}</FormikErrorStyle>
          <Image
            src={"/assets/contact/desktop/icon-error.svg"}
            width={20}
            height={20}
            alt={"image error input"}
          />
        </WrapperFormikError>
      ) : null}
    </LabelStyle>
  );
}

export const MemoSingleInput = React.memo(SingleInput);
