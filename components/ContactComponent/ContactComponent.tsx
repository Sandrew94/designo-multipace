import {
  DescriptionContact,
  SVGPositionContact,
  TextContainerContact,
  TitleContact,
  WrapperContact,
} from "./ContactComponents.style";
import InputContact from "./InputContact/InputContact";
import useMediaQuery from "../../hooks/useMediaQuery";
type Props = {};

export default function ContactComponent(props: Props) {
  const tabletOrLaptopView = useMediaQuery("(min-width: 768px)");
  return (
    <WrapperContact className={"animate-contactComponent"}>
      <TextContainerContact>
        <SVGPositionContact>
          {tabletOrLaptopView ? (
            <svg width="640" height="640" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
                  <stop stopColor="#5D0202" stopOpacity="0" offset="0%" />
                  <stop stopColor="#5D0202" stopOpacity=".498" offset="100%" />
                </linearGradient>
              </defs>
              <circle
                fill="url(#a)"
                transform="matrix(0 1 1 0 0 0)"
                cx="320"
                cy="320"
                r="320"
                fillRule="evenodd"
                opacity=".309"
              />
            </svg>
          ) : (
            <svg width="876" height="990" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
                  <stop stopColor="#5D0202" stopOpacity="0" offset="0%" />
                  <stop stopColor="#5D0202" stopOpacity=".498" offset="100%" />
                </linearGradient>
              </defs>
              <g
                transform="matrix(1 0 0 -1 0 990)"
                fill="none"
                fillRule="evenodd"
                opacity=".309"
              >
                <circle
                  transform="scale(-1 1) rotate(-90 0 1573.642)"
                  cx="730"
                  cy="843.642"
                  r="146"
                />
                <circle
                  fill="url(#a)"
                  transform="matrix(-1 0 0 1 876 0)"
                  cx="438"
                  cy="843.642"
                  r="146"
                  className={"circle1"}
                />
                <circle
                  fill="url(#a)"
                  transform="scale(-1 1) rotate(90 0 697.642)"
                  cx="146"
                  cy="843.642"
                  r="146"
                  className={"circle2"}
                />
                <circle
                  transform="scale(-1 1) rotate(-90 0 876.358)"
                  cx="730"
                  cy="146.358"
                  r="146"
                />
                <circle
                  transform="matrix(-1 0 0 1 876 0)"
                  cx="438"
                  cy="146.358"
                  r="146"
                />
              </g>
            </svg>
          )}
        </SVGPositionContact>
        <TitleContact>Contact Us</TitleContact>
        <DescriptionContact>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </DescriptionContact>
      </TextContainerContact>
      <InputContact />
    </WrapperContact>
  );
}
