import styled from "styled-components";
import { device } from "../../styles/device";

export const WrapperContact = styled.section`
  margin: 0 auto;
  background: #e7816b;
  width: 100%;
  height: 76.4rem;
  overflow: hidden;

  @media ${device.tablet} {
    width: 90%;
    border-radius: 15px;
  }

  @media ${device.laptop} {
    height: 48rem;
    display: flex;
    justify-content: space-between;
  }
`;

export const TextContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  @media ${device.tablet} {
    align-items: flex-start;
    margin-left: 5.8rem;
  }

  @media ${device.laptop} {
    margin-bottom: 10rem;
  }

  @media ${device.laptopL} {
    margin-left: 0;
  }
`;

export const SVGPositionContact = styled.div`
  position: absolute;
  top: 0;
  right: -90%;
  z-index: 1;

  @media ${device.tablet} {
    top: -25%;
    right: 30%;
  }

  @media ${device.laptop} {
    top: -42.5%;
    right: 0;
  }

  @media ${device.laptopL} {
    top: -42.5%;
    right: 3%;
  }
`;
////

export const TitleContact = styled.span`
  font-family: "Jost", sans-serif;
  font-size: 3.2rem;
  line-height: 3.6rem;

  font-weight: 500;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  margin-top: 7.2rem;
  z-index: 4;

  @media ${device.tablet} {
    text-align: left;
    font-size: 4.8rem;
    line-height: 4.8rem;
  }
  @media ${device.laptopL} {
    margin-left: 9.5rem;
  }
`;

export const DescriptionContact = styled.span`
  margin-top: 2.4rem;
  font-family: "Jost", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.5rem;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  width: 75%;
  z-index: 4;

  @media ${device.tablet} {
    width: 90%;
    text-align: left;
    font-size: 1.6rem;
    line-height: 2.6rem;
  }

  @media ${device.laptop} {
    width: 77%;
  }

  @media ${device.laptopL} {
    width: 70%;
    margin-left: 9.5rem;
  }
`;
