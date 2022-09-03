import styled from "styled-components";
import { device } from "../../styles/device";

export interface StylesTextType {
  stylesText?: Record<string, string | number>;
  route: string;
}

export const ButtonStyle = styled.button<StylesTextType>`
  letter-spacing: 1px;
  font-family: "Jost", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 21.68px;
  background-color: #fff;
  border: none;
  border-radius: 8px;
  width: 15.2rem;
  height: 5.6rem;
  cursor: pointer;
  ${(props) => props.stylesText}
`;
