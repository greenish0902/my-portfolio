import React, { memo } from "react";
import styled from "styled-components";

const HeaderContainer = memo(styled.div`
  padding: 0 120px;
  height: 136px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 3px solid var(--color-pink);
  border-bottom: 1px solid #e2d9d6;
  background: url("/img/bg_header.gif");
  z-index: 99999;
  * {
    cursor: pointer;
  }
  .icons,
  .infos {
    width: 216px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .infos {
    justify-content: space-evenly;
    color: #000;
    font-size: 10px;
  }
`);

const Header = memo(({ data }) => {
  return (
    data && (
      <HeaderContainer>
        <span className="icons">
          {data.icons.map((item, index) => (
            <img src={item.src} alt={item.alt} key={index} />
          ))}
        </span>
        <img className="logo" src={data.logo.src} alt={data.logo.alt} />
        <span className="infos">
          <span>고객센터</span>
          <span>CONTACT US</span>
          <img src="/img/icon_search.png" alt="search" />
        </span>
      </HeaderContainer>
    )
  );
});

export default Header;
