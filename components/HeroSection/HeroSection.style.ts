import styled from "styled-components";
import { device } from "../../styles/device";

export const WrapperMain = styled.section`
  /* height: 100vh; */
  width: 100%;
  margin-top: 25%;
  position: relative;
  @media ${device.tablet} {
    margin-top: -10%;
    height: 90vh;
  }
  @media ${device.laptop} {
    margin-top: 0%;
    height: 100vh;
  }
`;

export const WrapperHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 10%;

  &:last-child {
    padding-bottom: 20%;
  }

  @media ${device.tablet} {
    flex-direction: row;
  }

  @media ${device.laptop} {
    flex-direction: column;
    display: inline-block;
    width: 33.3%;
  }
`;

export const PositionHeroImage = styled.div`
  width: 20.2rem;
  height: 20.2rem;
  background: linear-gradient(
    220deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.2027) 100%
  );
  border-radius: 50%;
  z-index: -1;
  @media ${device.tablet} {
    margin-right: 10%;
  }

  @media ${device.laptop} {
    margin-right: 0%;
    margin: 0 auto;
  }
`;

export const TitleHero = styled.h1`
  font-family: "Jost", sans-serif;
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.6rem;
  letter-spacing: 5px;
  text-align: center;
  color: #333136;
  margin: 4rem 0;
`;

export const TitleDescription = styled.h2`
  font-family: "Jost", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem;
  letter-spacing: 0px;
  text-align: center;
  color: #333136;
  width: 95%;
`;

export const ContainerHeroText = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media ${device.laptop} {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;
