import React, { useState } from "react";

import "./home.styles.scss";
import step from "../../files/images/step.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import math from "../../files/images/Math.jpg";
import english from "../../files/images/English.webp";
import geography from "../../files/images/Geography.webp";
import history from "../../files/images/History.webp";
import chemistry from "../../files/images/Chemistry.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../../components/Button";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

const Home = () => {
  SwiperCore.use([Autoplay]);

  return (
    <div className="overflow-hidden">
      <div
        className="w-full 
      bg-cover 
      bg-center  
      hover:scale-110 
      ease-in duration-500 "
        style={{ height: "25rem", backgroundImage: `url(${step})` }}
      >
        <div
          className="
        flex 
        flex-col
        flex-wrap
        items-center 
        justify-center 
        h-full 
        w-full 
        bg-opacity-50
        space-y-3"
        >
          <h1
            className="
          text-black
          bg-white
          px-7
          rounded-full
          text-2xl 
          font-semibold 
          uppercase 
          md:text-3xl"
          >
            Writing Services For Your Needs
          </h1>

          <Button
            text="Join us"
            color="white"
            bgColor="green"
            borderRadius="10px"
          />
        </div>
      </div>

      <div className="md:container md:mx-auto">
        <div className="mt-12">
          <Swiper
            className="videogallery-swiper"
            spaceBetween={5}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            // centeredSlides={true}
            slidesPerView={4}
            navigation={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              950: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide>
              <img src={math} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={english} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={geography} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={chemistry} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={history} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
