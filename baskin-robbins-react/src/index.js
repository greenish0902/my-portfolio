import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Meta from "./Meta";
import GlobalStyle from "./GlobalStyle";
import "./assets/styles/common.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Meta />
    <App />
  </React.StrictMode>
);
