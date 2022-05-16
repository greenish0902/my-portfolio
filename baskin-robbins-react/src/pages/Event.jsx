import React, { memo } from "react";
import styled from "styled-components";
import EventSwiper from "../components/EventSwiper";

const EventContainer = memo(styled.div`
  margin-bottom: 60px;
`);

const Event = memo(() => {
  return (
    <EventContainer className="section">
      <div className="sectionTitle">
        <img src="img/h_event.png" alt="event" />
      </div>
      <EventSwiper className="swiperContainer" />
    </EventContainer>
  );
});

export default Event;
