import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    
    margin: 0 auto;
    background: rgb(2, 0, 36);
    background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(163, 45, 147, 1) 100%,
    rgba(5, 5, 5, 1) 100%
  );
  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  body, input, button {
    font: 14px Roboto; 
  }

  #root {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}
`;

export default GlobalStyle;
