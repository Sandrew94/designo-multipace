import styled from "styled-components";
import { device } from "../../../styles/device";

////// FORM

export const FormContainerSubmit = styled.div`
  z-index: 10;
  position: relative;
  width: 100%;
  margin-top: 5rem;
  overflow: hidden;
  @media ${device.laptop} {
    margin-top: 5.5rem;
    margin-right: 5rem;
  }
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75%;
  margin: 0 auto;

  @media ${device.tablet} {
    width: 80%;
    align-items: flex-start;
    margin-left: 5.8rem;
  }
  @media ${device.laptop} {
    width: 100%;
    margin-left: 0;
  }
`;

///////////////
//SINGLE INPUT

export const LinePosition = styled.div`
  height: 1px;
  background: #fff;
  width: 100%;
  opacity: 0.5;
`;

export const InputStyle = styled.input`
  width: 29.1rem;
  border: none;
  background: transparent;
  height: 6.5rem;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2.6rem;
  color: rgba(255, 255, 255, 1);
  outline: none;
  cursor: pointer;
  box-shadow: none;
  @media ${device.tablet} {
    width: 57.3rem;
  }
`;

export const LabelStyle = styled.label`
  position: relative;
  @media ${device.tablet} {
    width: 100%;
  }
`;

export const PlaceholderPosition = styled.div`
  position: absolute;
  top: 1.8rem;
  left: 1.8rem;
`;

export const PlaceholderStyle = styled.span`
  font-family: "Jost", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2.6rem;
  color: #fff;
`;

export const TextAreaStyle = styled.textarea`
  width: 29.1rem;
  height: 12.6rem;
  border: none;
  background: transparent;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2.6rem;
  color: rgba(255, 255, 255, 1);
  outline: none;
  cursor: pointer;
  resize: none;
  @media ${device.tablet} {
    width: 57.3rem;
  }
`;

export const ButtonSubmit = styled.button`
  height: 5.6rem;
  width: 15.2rem;
  color: #333136;
  background: #ffffff;
  font-family: "Jost", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2.2rem;
  letter-spacing: 1px;
  text-align: center;
  border: none;
  border-radius: 15px;
  margin-top: 3.9rem;
  cursor: pointer;

  @media ${device.tablet} {
    align-self: flex-end;
  }

  @media ${device.laptop} {
    margin-top: 2.4rem;
  }
`;

export const WrapperFormikError = styled.div`
  position: absolute;
  top: 2rem;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormikErrorStyle = styled.span`
  font-family: "Jost", sans-serif;
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 400;
  line-height: 2.6rem;
  color: #fff;
  margin-right: 0.8rem;
`;
