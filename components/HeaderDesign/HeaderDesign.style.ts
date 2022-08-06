import styled from "styled-components";

export const WrapperHeaderDesign = styled.section`
  width: 100%;
  height: 32rem;
  background: rgba(231, 129, 107, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const HeaderDesignTitle = styled.h1`
  font-family: "Josh", sans-serif;
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 3.6rem;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 3rem;
  z-index: 3;
`;

export const HeaderDesignDescription = styled.h2`
  font-family: "Josh", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.5rem;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  margin: 0 1rem;
  z-index: 3;
`;

export const SVGPositionHD = styled.div`
  position: absolute;
  top: 0;
  right: 50%;
  width: 100%;
  height: 100%;
`;
