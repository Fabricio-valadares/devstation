import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";

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

  .MuiInputBase-input input:-internal-autofill-selected {
    appearance: menulist-button;
    background-color: white!important;
    background-image: none !important;
    color: -internal-light-dark(black, white) !important;
}


.MuiSkeleton-text, .MuiSkeleton-circle {
  background-color: #cdcdcd !important;
}

.MuiSkeleton-rect {
  background-color: #30336B !important;
}

  .makeStyles-paper-2:focus {
    outline: none ;
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

  /* .MuiPaper-root {
    background-color: #130F40 !important
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

  .MuiAccordionSummary-content {
    margin: 7px 0 !important;
  } */

  .makeStyles-container-11 {
    width: 98%;
    display: flex;
    border-bottom: none;
    justify-content: center;
}

.MuiTypography-body1 {
    display: flex;
    font-size: 0.9375rem;
    font-weight: 400;
    align-items: center;
    background-color: var(--middle-primary);
    color: #fff;
    border-radius: 5px;
}
`;

export const StyledContainer = styled(ToastContainer).attrs({
  // custom props
})`
  .Toastify__toast--error {
    background-color: #600;
  }
  .Toastify__toast--success {
    background-color: #060;
  }
`;
