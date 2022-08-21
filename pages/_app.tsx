import type { AppProps } from "next/app";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { GlobalStyle } from "../styles/globals";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import useMediaQuery from "../hooks/useMediaQuery";
import { BigSVGFooter, ContainerSVG } from "../styles/BigSVGStyle";

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <>
      <NavBar />
      <GlobalStyle />
      <ContainerSVG>
        {isDesktop ? (
          route.asPath === "/" ||
          route.asPath === "/about" ||
          route.asPath === "/contact" ? (
            <BigSVGFooter pageName={route.asPath}>
              <Image
                src={"/assets/shared/desktop/bg-pattern-leaf.svg"}
                width={1006}
                height={594}
                alt={"big svg desktop"}
              />
            </BigSVGFooter>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        <Component {...pageProps} />
      </ContainerSVG>

      <Footer />
    </>
  );
}

export default MyApp;
