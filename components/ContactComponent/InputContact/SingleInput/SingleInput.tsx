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
import { tl } from "../../Animations";

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
    //Error popup
    tl.fromTo(
      errorRef.current,
      { right: -30, opacity: 0 },
      { right: 0, opacity: 1, duration: 0.5 }
    );
  }, [handleError]);

  const onMouseLeave = () => {
    const inputSelector = q("input") as HTMLInputElement[];

    inputSelector.forEach((input) => {
      if (input.value.length === 0) {
        gsap.fromTo(
          line.current,
          { width: "100%", height: 3, opacity: 1, duration: 0.5 },
          { width: "100%", height: 1, opacity: 0.5 }
        );
        gsap.fromTo(
          q(".placeholderStyle"),
          { top: 0, left: 10 },
          { top: 18, left: 18 }
        );
      }
    });
  };

  const onMouseEnter = () => {
    const inputSelector = q("input") as HTMLInputElement[];
    inputSelector.forEach((input) => {
      if (input.value.length === 0) {
        gsap.fromTo(
          line.current,
          { width: 0, height: 0, opacity: 0.5 },
          { width: "100%", height: 3, opacity: 1, duration: 0.5 }
        );
        gsap.fromTo(
          q(".placeholderStyle"),
          { top: 18, left: 18 },
          { top: 0, left: 10 }
        );
      }
    });
  };

  const handleFocusAnimations = () => {
    const inputSelector = q("input") as HTMLInputElement[];
    inputSelector.forEach((input) => {
      if (input.value.length >= 1) return;
      else {
        gsap.fromTo(
          line.current,
          { width: 0, height: 0, opacity: 0.5 },
          { width: "100%", height: 3, opacity: 1, duration: 0.5 }
        );
        gsap.to(q(".placeholderStyle"), { top: 0, left: 10 });
      }
    });
  };

  const handleBlur = () => {
    const inputSelector = q("input") as HTMLInputElement[];
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

        gsap.to(q(".placeholderStyle"), { top: 18, left: 18 });
      }
    });
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
