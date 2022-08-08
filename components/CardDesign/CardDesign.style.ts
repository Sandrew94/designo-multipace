import styled from "styled-components";
import { device } from "../../styles/device";

//ONLY LAPTOP OR HIGHER
export const LaptopGridView = styled.section`
  @media ${device.laptop} {
    display: grid;
    grid: auto/ 1fr 1fr 1fr;
    width: 92%;
    margin: 0 auto;
  }
`;

///////////

//MOBILE OR TABLET

export const WrapperCD = styled.section`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #fdf3f0;
  border-radius: 15px;
  overflow: hidden;
  margin: 5rem auto;

  @media ${device.tablet} {
    flex-direction: row;
  }

  @media ${device.laptop} {
    width: 95%;
    margin: 5rem auto;
    flex-direction: column;
  }
`;

export const PositionImageCD = styled.div`
  width: 100%;
  @media ${device.tablet} {
    width: 50%;
  }

  @media ${device.laptop} {
    width: 100%;
  }
`;

export const WrapperTextFooter = styled.div`
  height: 15.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    height: 31rem;
    width: 50%;
  }

  @media ${device.laptop} {
    height: 15.8rem;
    width: 100%;
  }
`;

export const TextTitleCD = styled.h1`
  font-family: "Jost", sans-serif;
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.6rem;
  letter-spacing: 5px;
  text-align: center;
  color: rgba(231, 129, 107, 1);
  margin-bottom: 2rem;
`;

export const TextDescription = styled.h2`
  font-family: "Jost", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem;
  text-align: center;
  width: 70%;
`;
