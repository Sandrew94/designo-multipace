import styled from "styled-components";

export const ContainerSVG = styled.div`
  position: relative;
  overflow: hidden;
`;

export const BigSVGFooter = styled.div<{ pageName: string }>`
  position: absolute;
  transform: ${(props) =>
    props.pageName === "/contact" ? "" : "rotate(180deg)"};
  bottom: ${(props) =>
    props.pageName === "/contact"
      ? "-13rem"
      : props.pageName === "/about"
      ? "73rem"
      : "0rem"};
  right: ${(props) => (props.pageName === "/about" ? "-38rem" : "0rem")};
  z-index: -1;
`;
