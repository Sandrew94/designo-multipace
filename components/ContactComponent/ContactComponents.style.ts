import styled from "styled-components";

export const WrapperContact = styled.section`
  margin: 0 auto;
  background: #e7816b;
  width: 100%;
  height: 76.4rem;
  overflow: hidden;
`;

export const TextContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const SVGPositionContact = styled.div`
  position: absolute;
  top: 0;
  right: -90%;
  z-index: 1;
`;
////

export const TitleContact = styled.span`
  font-family: "Jost", sans-serif;
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 3.6rem;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  margin-top: 7.2rem;
  z-index: 4;
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
`;
