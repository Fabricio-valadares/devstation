import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./styles/reset.css";
import GlobalStyle from "./styles/globalStyle";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F72585",
      aux: "#fff",
    },
    secondary: {
      main: "#B5179E",
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      <GlobalStyle />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
