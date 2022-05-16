import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import EventItem from "./EventItem";

const SwiperContainer = styled.div`
  padding: 0 84px;
  transition: all 300ms ease;
  --swiper-pagination-bullet-width: 8px;
  --swiper-pagination-bullet-size: 8px;
  --swiper-pagination-bullet-horizontal-gap: 12px;
  .swiper-wrapper {
    padding: 48px 0;
  }
  .swiper-pagination-bullet-active {
    --swiper-pagination-bullet-width: 10px;
    --swiper-pagination-bullet-size: 10px;
  }
  .swiper-pagination-bullets {
    bottom: -20px;
  }
`;

const EventSwiper = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:8000/event");
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <SwiperContainer>
      <Swiper
        spaceBetween={20}
        modules={[Pagination]}
        slidesPerView={4}
        pagination={{ clickable: true }}
        breakpoints={{
          769: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide className="swiperImg" key={index}>
            <EventItem
              img={item.src}
              cate={item.cate}
              desc={item.desc}
              etc={item.etc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};

export default EventSwiper;
