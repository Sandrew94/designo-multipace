import styled from "styled-components";
import { device } from "../../../styles/device";

interface ColorBaseIdx {
  idx: number;
}

export const WrapperHeaderAB = styled.section<ColorBaseIdx>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media ${device.tablet} {
    width: 90%;
    margin: 0 auto;
    border-radius: 15px;
    margin-top: 6rem;
  }

  @media ${device.laptop} {
    flex-direction: ${(props) =>
      props.idx === 0 || props.idx === 2 ? "row-reverse" : "row"};
  }
`;

export const ContainerImage = styled.div<ColorBaseIdx>`
  position: relative;
  width: 100%;
  overflow: hidden;
  @media ${device.tablet} {
    & span {
      height: 32rem !important;
    }
  }

  @media ${device.laptop} {
    border-top-right-radius: ${(props) => (props.idx === 0 ? "15px" : "")};
    border-bottom-right-radius: ${(props) => (props.idx === 0 ? "15px" : "")};
    width: 40%;
    & span {
      height: ${(props) =>
        props.idx === 0 ? "48rem !important" : "64rem !important"};
    }
  }
`;

export const ContainerTitleAB = styled.div<ColorBaseIdx>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => (props.idx === 0 ? "#E7816B" : "#FDF3F0")};
  margin-top: -1px;
  position: relative;
  overflow: hidden;
  @media ${device.laptop} {
    width: 60%;
    height: ${(props) =>
      props.idx === 0 ? "48rem !important" : "64rem !important"};
    justify-content: center;
  }
`;

export const TitleAB = styled.span<ColorBaseIdx>`
  font-family: "Jost", sans-serif;
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 3.6rem;
  text-align: center;
  color: ${(props) => (props.idx === 0 ? "rgba(255, 255, 255, 1)" : "#E7816B")};
  padding-top: 10rem;
  z-index: 4;

  @media ${device.tablet} {
    font-size: 4.8rem;
    line-height: 4.8rem;
  }

  @media ${device.laptop} {
    width: 75%;
    text-align: left;
  }

  @media ${device.laptop} {
    width: 65%;
  }
`;

export const DescriptionAB = styled.span<ColorBaseIdx>`
  font-family: "Jost", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.5rem;
  text-align: center;
  color: ${(props) => (props.idx === 0 ? "rgba(255, 255, 255, 1)" : "#333136")};
  padding: 4rem 0 8rem 0;
  width: 85%;
  z-index: 4;
  @media ${device.tablet} {
    font-size: 1.6rem;
    line-height: 2.6rem;
    text-align: center;
    width: 75%;
  }

  @media ${device.laptop} {
    text-align: left;
  }

  @media ${device.laptopL} {
    width: 65%;
  }
`;
