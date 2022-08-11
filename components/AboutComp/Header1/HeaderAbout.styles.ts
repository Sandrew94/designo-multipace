import styled from "styled-components";

interface ColorBaseIdx {
  idx: number;
}

export const WrapperHeader1 = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ContainerImage = styled.div`
  position: relative;
  width: 100%;
`;

export const ContainerTitleAB = styled.div<ColorBaseIdx>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => (props.idx === 0 ? "#E7816B" : "#FDF3F0")};
  margin-top: -1px;
  position: relative;
  overflow: hidden;
`;

export const TitleAB = styled.span<ColorBaseIdx>`
  font-family: "Jost", sans-serif;
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 3.6rem;
  text-align: center;
  color: ${(props) => (props.idx === 0 ? "rgba(255, 255, 255, 1)" : "#E7816B")};
  padding-top: 10rem;
  z-index: 4;
`;

export const DescriptionAB = styled.span<ColorBaseIdx>`
  font-family: "Jost", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.5rem;
  text-align: center;
  color: ${(props) => (props.idx === 0 ? "rgba(255, 255, 255, 1)" : "#333136")};
  padding: 4rem 0 8rem 0;
  width: 85%;
  z-index: 4;
`;
