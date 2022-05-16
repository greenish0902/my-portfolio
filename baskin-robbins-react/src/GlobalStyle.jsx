import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    user-select: none;
  }
  body {
    font-family: 'Nanum Gothic', sans-serif;
    overflow-x: hidden;
  }
  ul {
    list-style: none;
  }
  .section {
    margin: 36px;
  }
  .hidden {
    opacity: 0;
    /* transform: translateY(-20px); */
    /* display: none !important; */
  }
  .active {
    opacity: 1;
    /* display: flex !important; */
  }
  .sectionTitle {
    margin: auto;
    padding: 36px 0;
    text-align: center;
  }
  .swiper-pagination-bullets {
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default GlobalStyle;
