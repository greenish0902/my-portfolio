import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperContainer = styled.div`
  .swiperImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  --swiper-pagination-bullet-width: 10px;
  --swiper-pagination-bullet-size: 10px;
  --swiper-pagination-bullet-horizontal-gap: 12px;
  --swiper-pagination-bullet-inactive-color: #fff;
  --swiper-pagination-bullet-inactive-opacity: 1;
  .swiper-pagination-bullet-active {
    --swiper-pagination-bullet-width: 12px;
    --swiper-pagination-bullet-size: 12px;
  }
`;

const MainSwiper = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:8000/main");
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <SwiperContainer>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <img className="swiperImg" src={item.src} alt="main poster" />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};

export default MainSwiper;
