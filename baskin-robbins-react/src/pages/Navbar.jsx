import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Header from "../components/Header";
import NavMenu from "../components/NavMenu";
import Loading from "../components/Loading";

const NavbarContainer = styled.div`
  position: relative;
  top: 0;
  border-bottom: 1px solid var(--color-line-brown);
  transition: all 500ms ease;
  .menubar {
    display: flex;
    justify-content: center;
    align-items: baseline;
  }
  .bgBox {
    position: absolute;
    top: 180px;
    width: 100%;
    height: 332px;
    background-color: #fff;
    border-bottom: 1px solid var(--color-line-brown);
    z-index: 10;
    transition: all 500ms ease;
  }
  .hidden {
    /* transform: scaleY(0); */
    transform: translateY(-100%);
  }
  .active {
    transform: translateY(0);
  }
`;

const Navbar = () => {
  const [data, setData] = useState({});
  const [display, setDisplay] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDisplay = (option) => setDisplay(option);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:8000/navbar");
        setData(response.data);
        setLoading(true);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    data && (
      <NavbarContainer>
        {loading && <Loading />}
        <Header data={data.header} className="header" />
        <ul className="menubar">
          {data?.menu?.map((elem, index) => (
            <NavMenu
              data={elem}
              display={display}
              handleDisplay={handleDisplay}
              key={index}
            />
          ))}
        </ul>
        <div className={`${"bgBox"} ${display ? "active" : "hidden"}`}></div>
      </NavbarContainer>
    )
  );
};

export default Navbar;
