import React, { memo } from "react";
import styled from "styled-components";

const EventItemContainer = memo(styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2;
  .cateImg {
    margin-top: 24px;
    width: 120px;
  }
  .etc {
    font-size: 14px;
    color: var(--color-text-gray);
  }
`);

const EventItem = memo(({ img, cate, desc, etc }) => {
  return (
    <EventItemContainer>
      <img src={img} alt={desc} />
      <img className="cateImg" src={cate} alt="category" />
      <p>{desc}</p>
      <p className="etc">{etc}</p>
    </EventItemContainer>
  );
});

export default EventItem;
