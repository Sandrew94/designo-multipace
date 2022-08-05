import Link from "next/link";
import { ButtonStyle } from "./Button.style";

type Props = {
  href: string;
  text: string;
  stylesText: Record<string, string | number>;
};

export default function ButtonLink({ href, text, stylesText }: Props) {
  return (
    <ButtonStyle stylesText={stylesText}>
      <Link href={href} passHref>
        {text}
      </Link>
    </ButtonStyle>
  );
}
