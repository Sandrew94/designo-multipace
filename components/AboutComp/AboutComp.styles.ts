import styled from "styled-components";
import { device } from "../../styles/device";

export const AboutWrapper = styled.section`
  width: 100%;
  margin: 0 auto;
  position: relative;

  & section:nth-child(3) {
    position: absolute;
    top: 105%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }
`;

export const SVGPositionH1AB = styled.div`
  position: absolute;
  top: -27%;
  right: 4%;

  @media ${device.laptop} {
    right: -2%;
    top: -32%;
  }
`;

export const SVGPositionH2AB = styled.div`
  position: absolute;
  top: -10%;
  right: -25%;
`;
