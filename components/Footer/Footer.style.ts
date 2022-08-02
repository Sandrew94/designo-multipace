import styled from "styled-components";
import { ButtonStyle } from "../../styles/Button.style";

export const WrapperFooter = styled.footer`
  margin-top: 25rem;
  height: 81.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: rgba(29, 28, 30, 1);
`;

////////////////////////////////

export const WrapperPT = styled.div`
  width: 90vw;
  height: 37.9rem;
  background-color: #e7816b;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: absolute;
  top: -20%;
`;

export const WrapperBlack = styled.footer`
  width: 100%;
  height: 120rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 5rem;
  position: relative;
`;

///////////////

export const PtTitle = styled.h1`
  font-family: "Jost", sans-serif;
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 3.6rem;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  padding-top: 20%;
  padding-left: 3rem;
  padding-right: 3rem;
  position: relative;
  z-index: 3;
`;

export const PtDescription = styled.h2`
  font-family: "Jost", sans-serif;
  position: relative;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.5rem;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  padding: 10% 5%;
  z-index: 3;
`;

export const PtButton = styled(ButtonStyle)`
  position: relative;
  z-index: 3;
  //margin-bottom: 4rem;
`;

export const PtSvgPosition = styled.div`
  position: absolute;
  top: -20%;
  right: 0;
  z-index: 2;
`;

//////

export const FooterLogo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const FooterLogoStyles = styled.span`
  font-family: "Spartan", sans-serif;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 2.7rem;
  letter-spacing: 5px;
  color: #ffffff;
  margin-left: 2.5rem;
`;

////

export const Divider = styled.div`
  width: 80%;
  border: 1px solid rgba(255, 255, 255, 1);
  opacity: 0.2;
  height: 1px;
  margin-top: 3rem;
`;

export const InfoLinkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoLinkStyle = styled.span`
  font-family: "Jost", sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.4rem;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 1);
  padding-top: 4rem;

  &:last-child {
    padding-bottom: 2rem;
  }
`;

///

export const DescribeParagraph = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-top: 3rem;
`;

export const DPTitle = styled.h2`
  font-family: "Jost", sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.6rem;
  opacity: 0.5;
`;

export const DPLocations = styled.span`
  font-family: "Jost", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem;
  opacity: 0.5;
`;

///

export const WrapperSocial = styled.div`
  display: flex;
  width: 55%;
  justify-content: space-around;
  padding-top: 4rem;
`;
