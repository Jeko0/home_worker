import React, { useState } from "react";
import { Subjects } from "../../data/links.js";
import "./home.styles.scss";
import step from "../../files/images/step.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import math from "../../files/images/Math.jpg";
import english from "../../files/images/English.webp";
import geography from "../../files/images/Geography.webp";
import history from "../../files/images/History.webp";
import chemistry from "../../files/images/Chemistry.jpg";
import success from '../../files/images/success.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { topics } from "../../data/links.js";
import { LandingForm  } from "../../components/LandingForm.jsx";

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
            bgColor="blue"
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
          <p className=" mt-7 text-center">Hire best of the best</p>
        </div>
      </div>
      <div className="justify-center flex mt-10">
        <div className="grid grid-cols-2 gap-10 w-2/3">
          {Subjects.map((subject) => (
            <div
              key={subject.name}
              className="rounded overflow-hidden shadow-lg w-full"
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 hover:text-teal-400">
                  {subject.name}
                </div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center mt-10 text-2xl">
        Articles that Our writers Provide
      </p>
      <div className="mt-12 grid grid-cols-3 w-full space-y-3 border-2 border-black bg-slate-200">
        {topics.map((topic) => (
          <div
            key={topic.name}
            className="items-center justify-center gap-3 flex front-extrabold tracking-tight text-slate-900 hover:text-teal-400 pl-3 p-10"
          >
            {topic.icon}
            <span className="capitalize text-xl">{topic.title}</span>
          </div>
        ))}
      </div>

      <div className="bg-neutral-100">
        <p className="text-center mt-12 text-2xl">Find Specific subject</p>
        <div className="mt-12 md:container mx-auto grid grid-cols-2 items-center">
          <LandingForm />
          <img src={success} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
