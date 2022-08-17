import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import {
  ButtonSubmit,
  FormContainerSubmit,
  FormikErrorStyle,
  FormStyle,
  InputStyle,
  LabelStyle,
  TextAreaStyle,
  WrapperFormikError,
} from "./InputContact.style";

type Props = {};

export default function InputContact(props: Props) {
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

  return (
    <FormContainerSubmit>
      <FormStyle onSubmit={formik.handleSubmit}>
        <LabelStyle htmlFor={"Name"}>
          <InputStyle
            id={"Name"}
            name={"Name"}
            type={"text"}
            placeholder={"Name"}
            onChange={formik.handleChange}
            value={formik.values.Name}
          />
          {formik.touched.Name && formik.errors.Name ? (
            <WrapperFormikError>
              <FormikErrorStyle>{formik.errors.Name}</FormikErrorStyle>
              <Image
                src={"/assets/contact/desktop/icon-error.svg"}
                width={20}
                height={20}
                alt={"image error input"}
              />
            </WrapperFormikError>
          ) : null}
        </LabelStyle>

        <LabelStyle htmlFor={"Email"}>
          <InputStyle
            id={"Email"}
            name={"Email"}
            type={"text"}
            placeholder={"Email Address"}
            onChange={formik.handleChange}
            value={formik.values.Email}
          />
          {formik.touched.Email && formik.errors.Email ? (
            <WrapperFormikError>
              <FormikErrorStyle>{formik.errors.Email}</FormikErrorStyle>
              <Image
                src={"/assets/contact/desktop/icon-error.svg"}
                width={20}
                height={20}
                alt={"image error input"}
              />
            </WrapperFormikError>
          ) : null}
        </LabelStyle>

        <LabelStyle htmlFor={"Phone"}>
          <InputStyle
            id={"Phone"}
            name={"Phone"}
            type={"tel"}
            placeholder={"Phone"}
            onChange={formik.handleChange}
            value={formik.values.Phone}
          />
          {formik.touched.Phone && formik.errors.Phone ? (
            <WrapperFormikError>
              <FormikErrorStyle>{formik.errors.Phone}</FormikErrorStyle>
              <Image
                src={"/assets/contact/desktop/icon-error.svg"}
                width={20}
                height={20}
                alt={"image error input"}
              />
            </WrapperFormikError>
          ) : null}
        </LabelStyle>

        <LabelStyle htmlFor={"TextArea"}>
          <TextAreaStyle
            id="TextArea"
            name="YourMessage"
            placeholder={"Your Message"}
            onChange={formik.handleChange}
            value={formik.values.YourMessage}
          />
          {formik.touched.YourMessage && formik.errors.YourMessage ? (
            <WrapperFormikError>
              <FormikErrorStyle>{formik.errors.YourMessage}</FormikErrorStyle>
              <Image
                src={"/assets/contact/desktop/icon-error.svg"}
                width={20}
                height={20}
                alt={"image error input"}
              />
            </WrapperFormikError>
          ) : null}
        </LabelStyle>

        <ButtonSubmit type={"submit"}>SUBMIT</ButtonSubmit>
      </FormStyle>
    </FormContainerSubmit>
  );
}
