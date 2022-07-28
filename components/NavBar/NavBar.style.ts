import styled from "styled-components";

export const Wrapper = styled.div`
  width: auto;
  min-height: 9.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  position: relative;
`;

export const LogoWrapper = styled.div``;

export const LogoText = styled.span`
  font-family: "Spartan", sans-serif;
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 27px;
  letter-spacing: 5px;
  color: #333136;
`;

////////////////////////////////

export const SidebarStyle = styled.div``;

export const SidebarRight = styled.div<{
  displayStyle: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 23.5rem;
  background-color: #1d1c1e;
  margin-top: 9.6rem;
  display: ${(props) =>
    props.displayStyle ? "flex" : "none"};
  flex-direction: column;
  justify-content: space-evenly;
`;

export const AStyle = styled.a`
  text-decoration: none;
  font-family: "Jost", sans-serif;
  font-size: 2.4rem;
  line-height: 2.5rem;
  letter-spacing: 2px;
  color: #fff;
  padding-left: 2.4rem;
  vertical-align: top;
  cursor: pointer;
`;

////////

export const RouterWrapper = styled.div``;

export const AStyleTabletOrDesk = styled.a`
  font-family: "Jost", sans-serif;
  font-size: 1.4rem;
  line-height: 1.4rem;
  letter-spacing: 2px;
  color: #333136;
  vertical-align: top;
  padding-left: 4.4rem;
  cursor: pointer;
  text-decoration: none;
`;

////////

export const BackgroundActive = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
  z-index: -1;
`;
