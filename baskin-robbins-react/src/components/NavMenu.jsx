import React, { memo } from "react";
import styled from "styled-components";

const NavItemContainer = memo(styled.li`
  position: relative;
  padding: 0 44px;
  display: flex;
  line-height: 3;
  cursor: pointer;
  .hidden {
    height: 0;
  }
  .active {
    height: 274px;
  }
  ul {
    padding-top: 6px;
    position: absolute;
    top: 42px;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    color: var(--color-text-gray);
    background-color: #fff;
    z-index: 20;
    li:hover {
      color: var(--color-pink);
    }
    .imgContent {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .bgBox {
    position: fixed;
    top: 188px;
    left: 0;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid var(--color-line-brown);
    z-index: 10;
    &.active {
      height: 280px;
    }
  }
`);

const NavMenu = memo(({ data, display, handleDisplay }) => {
  const { title, content, img } = data;

  return (
    <NavItemContainer
      onMouseOver={() => handleDisplay(true)}
      onMouseOut={() => handleDisplay(false)}
    >
      <img src={title} alt="navbar" />
      <ul className={display ? "active" : "hidden"}>
        {content?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        {img?.map((src, index) => (
          <li key={index}>{<img className="imgContent" src={src} />}</li>
        ))}
      </ul>
      <div className={`${"bgBox"} ${display ? "active" : "hidden"}`}></div>
    </NavItemContainer>
  );
});

export default NavMenu;
