import React, { useState, useEffect, memo } from "react";
import styled from "styled-components";
import axios from "axios";

import Header from "../components/Header";
import NavMenu from "../components/NavMenu";
import Loading from "../components/Loading";

const NavbarContainer = memo(styled.div`
  position: relative;
  top: 0;
  border-bottom: 1px solid var(--color-line-brown);
  * {
    transition: all 500ms ease;
  }
  .line {
    position: absolute;
    width: 100%;
    height: 0.2px;
    top: 188px;
    z-index: 100;
    background-color: var(--color-line-deep-brown);
  }
  .menubar {
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`);

const Navbar = memo(() => {
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
      <NavbarContainer height="264px">
        {loading && <Loading />}
        <Header data={data.header} className="header" />
        <div className="line"></div>
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
      </NavbarContainer>
    )
  );
});

export default Navbar;
