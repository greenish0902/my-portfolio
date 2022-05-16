import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Noto Sans KR', sans-serif;
    margin: 0;
    padding: 0;
    user-select: none;
  }
  body {
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
  }
  .active {
    opacity: 1;
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
