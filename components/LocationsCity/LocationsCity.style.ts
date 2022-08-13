import styled from "styled-components";
import { device } from "../../styles/device";

export const WrapperLocationCity = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 125rem;
  margin-top: 10rem;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 100rem;
  }
`;
