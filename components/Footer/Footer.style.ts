import styled from "styled-components";
import { ButtonStyle } from "../../styles/Button.style";
import { device } from "../../styles/device";

export const WrapperFooter = styled.footer`
  margin-top: 25rem;
  height: 81.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: rgba(29, 28, 30, 1);

  @media ${device.tablet} {
    height: 60rem;
    margin-top: 10rem;
  }

  @media ${device.laptop} {
    margin-top: 0rem;
    width: 100%;
  }
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

  @media ${device.laptop} {
    width: 90rem;
    flex-direction: row;
    justify-content: space-around;
  }

  @media ${device.laptopL} {
    width: 111rem;
  }
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

  @media ${device.tablet} {
    font-size: 4rem;
    line-height: 4rem;
    width: 50%;
    padding-top: 10%;
    padding-left: 0;
    padding-right: 0;
  }

  @media ${device.laptop} {
    width: 70%;
    text-align: left;
  }
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

  @media ${device.tablet} {
    font-size: 1.6rem;
    line-height: 2.6rem;
    width: 65%;
    padding: 5% 0%;
  }

  @media ${device.laptop} {
    width: 100%;
    text-align: left;
  }
`;

export const TextContainer = styled.div`
  width: 50%;
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
  @media ${device.tablet} {
    width: 40%;
    justify-content: flex-start;
    margin-left: 5%;
  }

  @media ${device.laptop} {
    width: 50%;
    margin-left: 0%;
  }
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

  @media ${device.tablet} {
    width: 90%;
    margin-top: 6rem;
  }

  @media ${device.laptop} {
    width: 80%;
  }
`;

export const InfoLinkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row;
    width: 60%;
  }

  @media ${device.laptop} {
    width: 40%;
  }
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

  @media ${device.tablet} {
    padding-top: 0rem;
    width: 100%;
    text-align: center;

    &:first-child {
      padding-right: 2rem;
    }

    &:last-child {
      padding-bottom: 0rem;
    }
  }

  @media ${device.laptop} {
    text-align: right;
    &:first-child {
      padding-right: 1rem;
    }
    &:last-child {
      padding-right: 0.5rem;
    }
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

  @media ${device.tablet} {
    width: 30%;
  }
`;

export const DPTitle = styled.h2`
  font-family: "Jost", sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.6rem;
  opacity: 0.5;
  @media ${device.tablet} {
    text-align: left;
    width: 100%;
  }
`;

export const DPLocations = styled.span`
  font-family: "Jost", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem;
  opacity: 0.5;
  @media ${device.tablet} {
    text-align: left;
    width: 100%;
  }
`;

///

export const WrapperSocial = styled.div`
  display: flex;
  width: 55%;
  justify-content: space-around;
  padding-top: 4rem;
  @media ${device.tablet} {
    width: 30%;
    padding-top: 6rem;
    justify-content: flex-end;

    & span {
      margin-left: 1.5rem !important;
    }
  }
`;

///////

//Desktop or tablet view

export const WrapperFooterLand = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media ${device.laptop} {
    width: 90%;
  }
`;
