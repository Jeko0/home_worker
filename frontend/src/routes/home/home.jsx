import React from "react";
import "./home.styles.scss";
import step from "../../files/images/step.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel, { CarouselItem } from "../../components/Carousel";
import math from "../../files/images/Math.jpg";
import english from "../../files/images/English.webp";
import geography from "../../files/images/Geography.webp";
import history from "../../files/images/History.webp";
import chemistry from "../../files/images/Chemistry.jpg";

const Home = () => {
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
          className="flex 
        items-center 
        justify-center 
        h-full 
        w-full 
        bg-opacity-50"
        >
          <h1
            className="
          text-gray-200 
          text-2xl 
          font-semibold 
          uppercase 
          md:text-3xl"
          >
            Writing Services For Your Needs
          </h1>
        </div>
      </div>

      <div className="mt-12">
        <Carousel>
          <CarouselItem>1</CarouselItem>
          <CarouselItem>2</CarouselItem>
          <CarouselItem>3</CarouselItem>
          <CarouselItem>4</CarouselItem>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
