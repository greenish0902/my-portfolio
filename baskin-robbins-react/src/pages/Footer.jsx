import React, { useState, useEffect, memo } from "react";
import styled from "styled-components";
import axios from "axios";

const FooterContainer = memo(styled.div`
  margin-top: 196px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #77695a;
  .footerBorder {
    width: 100%;
    border: 0.3px solid #feaf2c;
  }
  *:not(.footerBorder) {
    padding: 4px 0;
  }
  .policy {
    height: 80px;
    display: flex;
    align-items: center;
    font-size: 14px;
    li {
      padding: 0 24px;
      font-weight: bold;
      &:nth-child(5) {
        color: var(--color-pink);
      }
    }
  }
  .brand {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 64px;
    background-color: var(--color-light-gray);
    img {
      padding: 0 32px;
      height: 32px;
      &:nth-child(n + 4) {
        padding: 0 4px;
      }
      &:nth-child(6) {
        padding-right: 72px;
      }
    }
  }
  .sites {
    width: 150px;
    height: 30px;
    appearance: none;
    -webkit-appearance: none;
    color: var(--color-text-gray);
    border: 1px solid var(--color-text-gray);
    border-radius: 4px;
    font-size: 12px;
    padding: 0 10px;
    box-sizing: border-box;
    background-image: url("/img/family_size_off.png");
    background-repeat: no-repeat;
    background-position: calc(100% - 10px) center;
  }
  .logo {
    padding: 24px 0;
  }
  .infos {
    font-size: 12px;
    .line {
      margin: 0 8px;
      display: flex;
      justify-content: center;
      li {
        padding: 0 8px;
      }
    }
  }
  .copyright {
    padding: 12px 0 72px 0;
    color: #b3b3b3;
  }
`);

const Footer = memo(() => {
  const [items, setItems] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:8000/footer");
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <FooterContainer>
      <hr className="footerBorder" />
      <ul className="policy">
        {items?.policy?.map((item, index) => (
          <li active={item.active} key={index}>
            {item.name}
          </li>
        ))}
      </ul>
      <ul className="brand">
        {items?.brand?.map((item, index) => (
          <img src={item.src} alt={item.alt} key={index} />
        ))}
        <select className="sites">
          <option value="FAMILY SITE">FAMILY SITE</option>
          <option value="????????? ??????">????????? ??????</option>
          <option value="SPC???????????????">SPC???????????????</option>
          <option value="SPC MAGAZINE">SPC MAGAZINE</option>
          <option value="BR?????????">BR?????????</option>
          <option value="?????????????????????">?????????????????????</option>
          <option value="????????????">????????????</option>
          <option value="??????">??????</option>
          <option value="???????????????">???????????????</option>
          <option value="???????????????">???????????????</option>
        </select>
      </ul>
      <img className="logo" src="img/footer_logo.png" alt="logo" />
      <div className="infos">
        <ul className="line">
          <li>????????? ???????????? : 303-81-09535 </li>
          <li>???????????????(???) ???????????? ????????? </li>
          <li>??????????????? ????????? ??????????????? 2620(????????? 11-149??????)</li>
        </ul>
        <ul className="line">
          <li>TEL : 080-555-3131 </li>
          <li>??????????????????????????? : ?????????</li>
        </ul>
        <p className="copyright">
          Copyright ??? 2016 BRKOREA Company. All Rights Reserved.
        </p>
      </div>
    </FooterContainer>
  );
});

export default Footer;
