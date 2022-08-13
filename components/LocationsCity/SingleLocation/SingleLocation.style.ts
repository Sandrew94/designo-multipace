import styled from "styled-components";

export const WrapperSingleLocation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

export const LocationAvatarPosition = styled.div`
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.197569) 100%
  );
`;

export const TextLocation = styled.span`
  font-family: "Jost", sans-serif;
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.6rem;
  letter-spacing: 5px;
  text-align: center;
  color: rgba(51, 49, 54, 1);
  padding-top: 5rem;
`;

export const ButtonLocations = styled.button`
  cursor: pointer;
  width: 15.2rem;
  height: 5.6rem;
  border-radius: 8px;
  color: rgba(255, 255, 255, 1);
  background: rgba(231, 129, 107, 1);
  font-family: "Jost", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2.2rem;
  letter-spacing: 1px;
  text-align: center;
  border: none;
  margin-top: 3rem;
`;
