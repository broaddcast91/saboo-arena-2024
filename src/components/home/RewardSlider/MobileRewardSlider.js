import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { RewardMobileSliderImages } from '../../../constants';

const MobileRewardSlider = ({ slides }) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
        // when window width is >= 768px
        768: {
          slidesPerView: 1,
        },
      }}
    >
      {RewardMobileSliderImages.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MobileRewardSlider;
