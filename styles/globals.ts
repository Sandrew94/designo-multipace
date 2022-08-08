import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html,
body {
  padding: 0;
  //margin: 0;
  font-family: -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
    max-width: 140rem;
    margin: 0 auto;
}

a {
  color: inherit;
  text-decoration: none;
  font-style: inherit;
  font-size: inherit;
  font-weight:inherit;
  line-height:inherit;
  font-family:inherit;
}

* {
  box-sizing: border-box;
  font-size: 62.5%;
  /* //1rem = 10px */
}

h1,h2{
  margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0em;
    margin-inline-end: 0em;
}


`;
