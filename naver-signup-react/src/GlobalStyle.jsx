import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    width: 460px;
    margin: 0 auto;
    margin-bottom: 92px;
    background-color: #f5f7f7;
    font-family: Dotum, 돋움, Helvetica, sans-serif;
  }
  form {
    margin: 0 auto;
    margin-top: 24px;
    width: 460px;
  }
  input,
  select,
  button {
    cursor: pointer;
    width: 100%;
    height: 51px;
    margin-top: 8px;
    padding: 8px 12px;
    font-size: 15px;
    border: 1px solid #dedede;
  }
  .red {
    color: #ff1e1e !important;
    opacity: 1;
  }
  .green {
    color: #00b853 !important; 
    opacity: 1;
  }
  .regexMsg {
    display: none;
  }
  .show {
    display: block;
  }
  .hidden {
    display: none;
  }
  button {
    color: white;
    background-color: #02c75a;
    border: 1px solid #00bb54;
  }
  label {
    font-size: 14px;
    font-weight: bold;
  }
  div p {
    margin: 12px 0;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
  }
  select {
    appearance: none;
    background-image: url("/img/caret-down-solid.svg");
    background-repeat: no-repeat;
    background-position: calc(100% - 10px) center;
    background-size: 12px;
  }
  input::placeholder {
    color: rgb(162, 162, 162);
  }
  input:focus,
  select:focus {
    outline: 1px solid #02c75a;
  }
`;

export default GlobalStyle;
