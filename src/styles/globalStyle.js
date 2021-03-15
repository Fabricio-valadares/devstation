import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  #root {
    --dark-primary: #130F40;
    --middle-primary: #30336B;
    --soft-primary: #30336B;
    --secondary: #F72585;
    --dark-secondary: #B5179E;
    --tertiary: #4CC9F0;
    --dark-tertiary: #4895EF;
    --text: #fff;
    --green-bar: #1DD1A1;
    --yellow-bar: #FFDA79;
    --red-bar: #FF5252;
    --dash-background: #30336B;
  }

  body {
    font-family: 'Roboto', sans-serif; 
    color: var(--text);
    
    background-color: #30336B ;

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

  ::-webkit-scrollbar-track {
    background-color: var(--dark-primary);
  }
  ::-webkit-scrollbar {
      width: 6px;
      background: var(--soft-primary);
  }
  ::-webkit-scrollbar-thumb {
      background: var(--soft-primary);
      border-radius: 5px;
  }

  .MuiPaper-root {
    background-color: var(--dark-primary) !important
  }

  .MuiAccordionDetails-root {
    background-color: #fff;
    display: flex;
    border-radius: 0 0 3px 3px;
    margin-top: 5px;
    padding: 8px 16px 16px;
  }

  .MuiAccordion-root:before {
    left: none;
  }

  .MuiAccordion-root.Mui-expanded {
    margin: 0 !important;
  }

  .MuiAccordionDetails-root {
    justify-content: space-between;
  }
`;
