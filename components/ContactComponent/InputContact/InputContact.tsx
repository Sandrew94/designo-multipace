import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import {
  ButtonSubmit,
  FormContainerSubmit,
  FormikErrorStyle,
  FormStyle,
  LabelStyle,
  LinePosition,
  PlaceholderPosition,
  PlaceholderStyle,
  TextAreaStyle,
  WrapperFormikError,
} from "./InputContact.style";
import { MemoSingleInput } from "./SingleInput/SingleInput";
import React, { useRef } from "react";
import gsap from "gsap";
import { tl } from "../Animations";

export default function InputContact() {
  const textarea = useRef<HTMLTextAreaElement>(null);
  const line = useRef(null);
  const placeholder = useRef(null);
  const errorRef = useRef(null);
  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Phone: "",
      YourMessage: "",
    },
    validationSchema: Yup.object({
      Name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .min(3, "Must be 3 characters or more")
        .required("Can't be empty"),
      Email: Yup.string()
        .email("Invalid email address")
        .required("Can't be empty"),
      Phone: Yup.number()
        .min(6, "Must be 3 number or more")
        .positive()
        .integer()
        .required("Can't be empty"),
      YourMessage: Yup.string()
        .min(30, "Must be 30 characters or more")
        .max(150, "Must be 150 characters or less")
        .required("Can't be empty"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const objInputData = [
    {
      handleError: formik.touched.Name && formik.errors.Name,
      errorMessage: formik.errors.Name,
      formikHandleChange: formik.handleChange,
      formikValue: formik.values.Name,
      textareaName: "Name",
      placeholder: "Name",
      type: "text",
    },
    {
      handleError: formik.touched.Email && formik.errors.Email,
      errorMessage: formik.errors.Email,
      formikHandleChange: formik.handleChange,
      formikValue: formik.values.Email,
      textareaName: "Email",
      placeholder: "Email Address",
      type: "text",
    },
    {
      handleError: formik.touched.Phone && formik.errors.Phone,
      errorMessage: formik.errors.Phone,
      formikHandleChange: formik.handleChange,
      formikValue: formik.values.Phone,
      textareaName: "Phone",
      placeholder: "Phone",
      type: "tel",
    },
  ];

  React.useEffect(() => {
    //Error popup
    tl.fromTo(
      errorRef.current,
      { right: -30, opacity: 0 },
      { right: 0, opacity: 1, duration: 0.5 }
    );
  }, [formik.touched.YourMessage, formik.errors.YourMessage]);

  const onMouseLeave = () => {
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
  };

  const onMouseEnter = () => {
    if (textarea.current!.value.length === 0) {
      gsap.fromTo(
        line.current,
        { width: 0, height: 0, opacity: 0.5 },
        { width: "100%", height: 3, opacity: 1, duration: 0.5 }
      );
      gsap.fromTo(
        placeholder.current,
        { top: 0, left: 10 },
        { top: 130, left: 18 }
      );
    }
  };

  const handleFocusAnimations = () => {
    if (textarea.current!.value.length >= 1) return;
    else {
      gsap.fromTo(
        line.current,
        { width: 0, height: 0, opacity: 0.5 },
        { width: "100%", height: 3, opacity: 1, duration: 0.5 }
      );
      gsap.to(placeholder.current, { top: 130, left: 18 });
    }
  };

  const handleBlur = () => {
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
  };

  return (
    <FormContainerSubmit>
      <FormStyle onSubmit={formik.handleSubmit} autoComplete={"off"}>
        {objInputData.map((textarea, idx) => {
          return (
            <React.Fragment key={idx}>
              <MemoSingleInput
                handleError={textarea.handleError}
                errorMessage={textarea.errorMessage}
                formikHandleChange={textarea.formikHandleChange}
                formikValue={textarea.formikValue}
                inputName={textarea.textareaName}
                placeholder={textarea.placeholder}
                type={textarea.type}
              />
            </React.Fragment>
          );
        })}

        <LabelStyle
          htmlFor={"TextArea"}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <TextAreaStyle
            id="TextArea"
            name="YourMessage"
            onChange={formik.handleChange}
            value={formik.values.YourMessage}
            ref={textarea}
            onBlur={handleBlur}
            onFocus={handleFocusAnimations}
          />
          {formik.touched.YourMessage && formik.errors.YourMessage ? (
            <WrapperFormikError ref={errorRef}>
              <FormikErrorStyle>{formik.errors.YourMessage}</FormikErrorStyle>
              <Image
                src={"/assets/contact/desktop/icon-error.svg"}
                width={20}
                height={20}
                alt={"image error textarea"}
              />
            </WrapperFormikError>
          ) : null}
          <LinePosition ref={line}>
            <PlaceholderPosition
              className={"placeholderStyle"}
              ref={placeholder}
            >
              <PlaceholderStyle>Your Message</PlaceholderStyle>
            </PlaceholderPosition>
          </LinePosition>
        </LabelStyle>

        <ButtonSubmit type={"submit"}>SUBMIT</ButtonSubmit>
      </FormStyle>
    </FormContainerSubmit>
  );
}
