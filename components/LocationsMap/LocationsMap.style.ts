import styled from "styled-components";
import { device } from "../../styles/device";

export const WrapperLocationsMap = styled.section`
  margin: 0 auto;
  @media ${device.tablet} {
    margin-top: 4rem;

    & section:not(:first-child) {
      margin-top: 12rem;
    }
  }
`;
