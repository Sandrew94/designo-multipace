import Link from "next/link";
import { ButtonStyle } from "./Button.style";
import { useRef } from "react";
import { useRouter } from "next/router";
import {
  onMouseEnterAnimations,
  onMouseExitAnimations,
} from "./Animations/ButtonHoverAnimations";

type Props = {
  href: string;
  text: string;
  stylesText?: Record<string, string | number>;
  type: "button" | "submit" | "reset" | undefined;
};

export default function ButtonLink({
  href,
  text,
  stylesText,
  type = "button",
}: Props) {
  const buttonRef = useRef(null);
  const router = useRouter();

  const handleOnMouseEnter = () => {
    onMouseEnterAnimations(buttonRef, router);
  };

  const handleOnMouseLeave = () => {
    onMouseExitAnimations(buttonRef, router);
  };

  return (
    <ButtonStyle
      type={type}
      stylesText={stylesText}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      ref={buttonRef}
      route={router.asPath}
    >
      <Link href={href} passHref>
        {text}
      </Link>
    </ButtonStyle>
  );
}
