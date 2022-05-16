import React from "react";
import styled from "styled-components";
import MainSwiper from "../components/MainSwiper";

const MainContainer = styled.div`
  .mainBar {
    object-position: center;
  }
`;

const Main = () => {
  return (
    <MainContainer>
      <img className="mainBar" src="/img/main_bar.jpg" alt="season menu" />
      <MainSwiper />
    </MainContainer>
  );
};

export default Main;
