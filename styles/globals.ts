import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
    max-width: max-content;
    margin: 0 auto;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  font-size: 62.5%;
  /* //1rem = 10px */
}

`;
