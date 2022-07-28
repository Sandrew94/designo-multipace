import styled from "styled-components";
import { device } from "../../styles/device";

export const WrapperHeaderHome = styled.div`
  width: 100%;
  height: 80%;
  background-color: #e7816b;
  position: relative;
  z-index: 3;
  overflow: hidden;

  @media ${device.tablet} {
    border-radius: 15px;
    width: 95%;
    height: 75%;
    margin: 0 auto;
  }

  @media ${device.laptop} {
    display: flex;
    height: 60vh;
  }
  @media ${device.laptopL} {
    height: 50vh;
  }
`;

export const SVGPosition = styled.div`
  position: absolute;
  z-index: -1;
  top: 10.2rem;
  right: -50%;
  @media ${device.tablet} {
    right: -20%;
    top: 10%;
  }
  @media ${device.laptop} {
    right: 0;
    top: 0;
  }
`;

////////////////////////////////

export const ContainerHH = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media ${device.laptop} {
    width: 50%;
    justify-content: center;
    align-items: flex-start;
    margin-left: 9.5rem;
  }
  @media ${device.laptopL} {
    margin-left: 5rem;
  }
`;
export const TextTitleHH = styled.span`
  font-family: "Jost", sans-serif;
  font-style: medium;
  font-size: 3.2rem;
  line-height: 36px;
  vertical-align: top;
  color: #fff;
  text-align: center;
  margin-top: 20%;
  padding: 0.5rem 3rem;
  @media ${device.tablet} {
    font-size: 4.8rem;
    line-height: 48px;
    font-weight: 500;
    margin-top: 5%;
    padding: 1rem 10rem;
  }
  @media ${device.laptop} {
    padding: 0;
    text-align: left;
    margin-bottom: 3rem;
  }

  @media ${device.laptopL} {
    padding-left: 10rem;
    width: 100%;
    margin-bottom: 6rem;
  }
`;
export const TextDescriptionHH = styled.span`
  font-family: "Jost", sans-serif;
  font-style: regular;
  font-size: 1.5rem;
  line-height: 25px;
  vertical-align: top;
  color: #fff;
  text-align: center;
  padding: 2rem 3rem;
  @media ${device.tablet} {
    font-size: 1.6rem;
    line-height: 26px;
    font-weight: 400;
    padding: 2rem 16rem;
  }

  @media ${device.laptop} {
    padding: 0;
    text-align: left;
    margin-bottom: 3rem;
  }
  @media ${device.laptopL} {
    padding-left: 10rem;
    width: 75%;
    margin-bottom: 6rem;
  }
`;

export const LearnMoreButtonHH = styled.button`
  letter-spacing: 1px;
  font-family: "Jost", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 21.68px;
  background-color: #fff;
  border: none;
  border-radius: 8px;
  width: 15.2rem;
  height: 5.6rem;

  @media ${device.laptopL} {
    margin-left: 10rem;
  }
`;

////////

export const HeroPhone = styled.div`
  position: relative;
  height: 55rem;
  margin-top: -15%;

  @media ${device.tablet} {
    height: 55rem;
    margin-top: -8%;
  }

  @media ${device.laptop} {
    width: 50%;
    position: absolute;
    right: 5%;
    top: 8%;
  }
  @media ${device.laptopL} {
    width: 50%;
    position: absolute;
    right: -11%;
    top: 12%;
  }
`;
