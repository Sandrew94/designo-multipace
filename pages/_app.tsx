// import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { GlobalStyle } from "../styles/globals";

function MyApp({
  Component,
  pageProps,
}: AppProps) {
  return (
    <>
      <NavBar />
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
