import styled from "styled-components";
import { device } from "../../../styles/device";

export const WrapperSingleMap = styled.section<{ idx: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin-top: 4rem;
  @media ${device.laptop} {
    flex-direction: ${(props) =>
      props.idx === 0 || props.idx === 2 ? "row-reverse" : "row"};
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
  }
`;

export const TextMarkerStyle = styled.div`
  font-family: "Jost", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.5rem;
  text-align: center;
`;

/////

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fdf3f0;
  width: 100%;
  height: 39.4rem;
  overflow: hidden;
  border-radius: 15px;
  position: relative;

  @media ${device.tablet} {
    width: 95%;
    align-items: flex-start;
    padding-left: 5%;
    height: 32.6rem;
  }

  @media ${device.laptop} {
    width: 63%;
  }
`;

export const TextTitleLC = styled.span`
  color: #e7816b;
  font-family: "Jost", sans-serif;
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 3.6rem;
  text-align: center;
  padding-bottom: 3rem;
  z-index: 2;
  @media ${device.tablet} {
    font-size: 4rem;
  }
`;
export const WrapperALLText = styled.div`
  z-index: 2;
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    width: 65%;
  }
`;

export const ContainerTextSecondary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 3rem;
`;

export const TextDescriptionTitleLC = styled.span`
  font-family: "Jost", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.5rem;
  text-align: center;
  @media ${device.tablet} {
    text-align: left;
    width: 100%;
    font-size: 1.6rem;
    line-height: 2.6rem;
  }
`;
export const TextDescriptionLocationLC = styled.span`
  font-family: "Jost", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.5rem;
  text-align: center;
  white-space: pre-wrap;

  @media ${device.tablet} {
    text-align: left;
    font-size: 1.6rem;
    line-height: 2.6rem;
  }
`;

/////////

export const PositionSVGLC = styled.div`
  position: absolute;
  top: 0;
  right: -16rem;
  z-index: 1;

  @media ${device.tablet} {
    top: -26rem;
    right: 17rem;
  }
`;
