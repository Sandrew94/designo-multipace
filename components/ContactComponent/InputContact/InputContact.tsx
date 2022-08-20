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
import { errorAnimationHandler } from "../Animations/Errors/ErrorAni";
import { MouseLeaveTextAreaAnim } from "../Animations/TextAreaAnimations/MouseLeaveTextAreaAnim";
import { MouseEnterTextareaAnim } from "../Animations/TextAreaAnimations/MouseEnterTextareaAnim";
import { FocusAnimationsTextArea } from "../Animations/TextAreaAnimations/FocusAnimationsTextArea";
import { BlurTextAreaAnimations } from "../Animations/TextAreaAnimations/BlurTextAreaAnimations";

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
    errorAnimationHandler(errorRef);
  }, [formik.touched.YourMessage, formik.errors.YourMessage]);

  const textAreaObj = {
    textarea,
    line,
    placeholder,
  };

  const onMouseLeave = () => {
    MouseLeaveTextAreaAnim(textAreaObj);
  };

  const onMouseEnter = () => {
    MouseEnterTextareaAnim(textAreaObj);
  };

  const handleFocusAnimations = () => {
    FocusAnimationsTextArea(textAreaObj);
  };

  const handleBlur = () => {
    BlurTextAreaAnimations(textAreaObj);
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
