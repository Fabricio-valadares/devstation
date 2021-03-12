import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  #root {
    --dark-primary: #3A0CA3;
    --middle-primary: #480CA8;
    --soft-primary: #560BAD;
    --secondary: #F72585;
    --dark-secondary: #B5179E;
    --tertiary: #4CC9F0;
    --dark-tertiary: #4895EF;
    --text: #fff;
    --green-bar: #1DD1A1;
    --yellow-bar: #FFDA79;
    --red-bar: #FF5252;
    --dash-background: #eee;
  }

  body {
    font-family: 'Roboto', sans-serif; 
    color: var(--text);
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea {
    outline: none;
    border: none;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
