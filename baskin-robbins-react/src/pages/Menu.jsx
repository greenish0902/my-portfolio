import React, { useState, useEffect, memo } from "react";
import styled from "styled-components";
import axios from "axios";

const MenuContainer = memo(styled.section`
  position: relative;
  width: 100%;
  height: 1200px;
  background: no-repeat top 0 left -524px/172% url("/img/bg_menu.jpg");
  .sectionTitle {
    padding-top: 48px;
  }
  .menuImg {
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`);

const Menu = memo(() => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:8000/menu");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <MenuContainer>
      <div className="sectionTitle">
        <img src="img/h_menu.png" alt="menu" />
      </div>
      {data.map((item, index) => (
        <img className="menuImg" src={item.src} alt={item.alt} key={index} />
      ))}
    </MenuContainer>
  );
});

export default Menu;
