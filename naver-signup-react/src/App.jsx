import React from "react";
import styled from "styled-components";
import Form from "./components/Form";

const NavContainer = styled.nav`
  text-align: center;
  .logoImg {
    margin: 0 auto;
    margin-top: 60px;
    width: 240px;
  }
`;

const App = () => {
  return (
    <div>
      <NavContainer>
        <img src="/img/logo.png" alt="logo" className="logoImg" />
      </NavContainer>
      <Form />
    </div>
  );
};

export default App;
