import styled from "styled-components";
import { device } from "../../styles/device";

export const WrapperMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 80rem;
  width: 100%;
  @media ${device.tablet} {
    justify-content: unset;
    margin-top: 15%;
    height: 90vh;
  }
  @media ${device.laptop} {
    justify-content: unset;
    margin-top: 0%;
  }

  @media ${device.laptopL} {
    justify-content: unset;
    height: 80vh;
    margin-top: 5%;
  }
`;

////////////////////////////////////////////////////////////////

export const WrapperTable = styled.div<{
  width?: string;
  height?: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 32.7rem;
  height: 25rem;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  margin-top: 3rem;
  @media ${device.tablet} {
    width: 95vw;
    height: 20rem;
  }

  @media ${device.laptop} {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: 1rem 0;
  }
`;

export const TextDesignTitle = styled.h1`
  font-family: "Jost", sans-serif;
  font-size: 2.8rem;
  line-height: 36px;
  letter-spacing: 1.4px;
  color: #fff;
  z-index: 2;
  margin-block-start: 0em;
  margin-block-end: 0em;
  @media ${device.tablet} {
    margin-bottom: 1rem;
  }
`;

export const TextDescriptionPJ = styled.h2`
  font-family: "Jost", sans-serif;
  font-size: 1.5rem;
  line-height: 21.68px;
  letter-spacing: 5px;
  color: #fff;
  z-index: 2;
  position: relative;
`;

export const SvgArrowPos = styled.span`
  margin-left: 2.5rem;
`;

////////

//DESKTOP VIEW

export const WrapperDesktop = styled.section`
  width: 95%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperBigTable = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
  padding: 1rem 0;
`;

export const WrapperGrAndAppDesign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80%;
`;
