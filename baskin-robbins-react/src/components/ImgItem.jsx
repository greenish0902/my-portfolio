import React from "react";
import styled from "styled-components";

const ImgItemContainer = styled.div`
  width: 20%;
  height: 200px;
`;

const ImgItem = ({ src, alt }) => {
  return <ImgItemContainer src={src} alt={alt}></ImgItemContainer>;
};

export default ImgItem;
