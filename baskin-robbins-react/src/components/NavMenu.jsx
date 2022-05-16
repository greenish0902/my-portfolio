import React from "react";
import styled from "styled-components";

const NavItemContainer = styled.li`
  position: relative;
  padding: 0 40px;
  display: flex;
  align-items: center;
  line-height: 3;
  cursor: pointer;
  .imgContent {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  /* .active {
    border-top: 1px solid var(--color-line-brown);
  } */
  ul {
    padding-top: 8px;
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    height: 320px;
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
  }
`;

const NavMenu = ({ data, display, handleDisplay }) => {
  const { title, content, img } = data;

  return (
    <NavItemContainer
      onMouseOver={() => handleDisplay(true)}
      onMouseOut={() => handleDisplay(false)}
    >
      <span className="title">{title}</span>
      <ul className={display ? "active" : "hidden"}>
        {content?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        {img?.map((src, index) => (
          <img className="imgContent" src={src} key={`img${index}`} />
        ))}
      </ul>
    </NavItemContainer>
  );
};

export default NavMenu;
