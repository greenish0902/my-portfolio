import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const FooterContainer = styled.div`
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
`;

const Footer = () => {
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
        <select name="sites">
          <option value="FAMILY SITE">FAMILY SITE</option>
          <option value="배스킨 스쿨">배스킨 스쿨</option>
          <option value="SPC그룹사이트">SPC그룹사이트</option>
          <option value="SPC MAGAZINE">SPC MAGAZINE</option>
          <option value="BR코리아">BR코리아</option>
          <option value="해피포인트카드">해피포인트카드</option>
          <option value="파스쿠찌">파스쿠찌</option>
          <option value="삼립">삼립</option>
          <option value="파리바게트">파리바게트</option>
          <option value="던킨도너츠">던킨도너츠</option>
        </select>
      </ul>
      <img className="logo" src="img/footer_logo.png" alt="logo" />
      <div className="infos">
        <ul className="line">
          <li>사업자 등록번호 : 303-81-09535 </li>
          <li>비알코리아(주) 대표이사 도세호 </li>
          <li>서울특별시 서초구 남부순환로 2620(양재동 11-149번지)</li>
        </ul>
        <ul className="line">
          <li>TEL : 080-555-3131 </li>
          <li>개인정보관리책임자 : 김경우</li>
        </ul>
        <p className="copyright">
          Copyright ⓒ 2016 BRKOREA Company. All Rights Reserved.
        </p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
