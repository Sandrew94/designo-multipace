import styled from "styled-components";

export const WrapperMain = styled.section`
  height: 100vh;
  width: 100%;
  margin-top: 25%;
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
`;

export const PositionHeroImage = styled.div`
  width: 202px;
  height: 202px;
  background: linear-gradient(
    220deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.2027) 100%
  );
  border-radius: 50%;
  z-index: -1;
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
