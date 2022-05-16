import React, { useState, useEffect, memo } from "react";
import styled from "styled-components";
import axios from "axios";

const SocialContainer = memo(styled.div`
  position: relative;
  * {
    transition: all 300ms ease;
  }
  .sectionTitle {
    padding-bottom: 12px;
  }
  .imgItems {
    margin: 24px 0;
    text-align: center;
    img {
      margin: 0 12px;
      cursor: pointer;
    }
  }
  .line {
    position: absolute;
    top: 224px;
    width: 452px;
    height: 0.2px;
    background-color: var(--color-text-gray);
    &.left {
      left: 74px;
    }
    &.right {
      right: 74px;
    }
  }
  .socialImg {
    margin-top: 36px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .socialImgItem {
      object-fit: cover;
      width: 240px;
      height: 240px;
      margin: 2px;
      border-radius: 4px;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`);

const Social = memo(() => {
  const [data, setData] = useState({});
  const url = "http://localhost:8000/social";

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    data && (
      <SocialContainer className="section">
        <div className="sectionTitle">
          <img src="img/h_sns.png" alt="sns" />
        </div>
        <div className="imgItems">
          {data?.icons?.map((item, index) => (
            <img src={item.src} alt={item.alt} key={index} />
          ))}
        </div>
        <div className="sectionTitle">
          <img src="img/tit_sns.png" alt="baskinrobbins instagram" />
        </div>
        <div className={`${"line"} ${"left"}`}></div>
        <div className={`${"line"} ${"right"}`}></div>
        <div className="socialImg">
          {data?.instagram?.map((item, index) => (
            <img
              className="socialImgItem"
              src={item.src}
              alt={item.alt}
              key={index}
            />
          ))}
        </div>
      </SocialContainer>
    )
  );
});

export default Social;
