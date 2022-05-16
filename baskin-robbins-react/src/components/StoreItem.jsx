import React, { memo } from "react";
import styled from "styled-components";

const StoreItemContainer = memo(styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    padding: 48px 0;
    font-weight: bold;
  }
  img {
    cursor: pointer;
  }
`);

const StoreItem = memo(({ title, src, alt }) => {
  return (
    <StoreItemContainer>
      <div className="sectionTitle">
        <img src={title} alt={alt} />
      </div>
      <img className="storeImg" src={src} alt={alt} />
    </StoreItemContainer>
  );
});

export default StoreItem;
