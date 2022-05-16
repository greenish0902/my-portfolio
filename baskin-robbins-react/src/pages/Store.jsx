import React, { useState, useEffect, memo } from "react";
import styled from "styled-components";
import axios from "axios";

import StoreItem from "../components/StoreItem";

const StoreContainer = memo(styled.div`
  display: flex;
  justify-content: center;
`);

const Store = memo(() => {
  const [data, setData] = useState([]);
  const url = "http://localhost:8000/store";

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
      <StoreContainer>
        {data?.map((item, index) => (
          <StoreItem
            title={item.title}
            src={item.src}
            alt={item.alt}
            key={index}
          />
        ))}
      </StoreContainer>
    )
  );
});

export default Store;
