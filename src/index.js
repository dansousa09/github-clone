import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import App from "./App";
import store from "./store";
import GlobalStyle from "./styles/global";
import orange from "./styles/themes/orange";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={orange}>
      <React.StrictMode>
        <GlobalStyle />
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
