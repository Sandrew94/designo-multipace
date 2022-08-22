import type { AppProps } from "next/app";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { GlobalStyle } from "../styles/globals";
import Image from "next/image";
import { useRouter } from "next/router";
import useMediaQuery from "../hooks/useMediaQuery";
import { BigSVGFooter, ContainerSVG } from "../styles/BigSVGStyle";
import PageTransitions from "../components/PageTransitions/PageTransitions";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [route.events]);

  return (
    <>
      <NavBar />

      <PageTransitions route={route.asPath}>
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
      </PageTransitions>
      <GlobalStyle />
      <Footer />
    </>
  );
}

export default MyApp;
