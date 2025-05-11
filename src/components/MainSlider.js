import React from "react";
//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../slider.css";
//import required modules
import { Pagination } from "swiper";
//img
import CameraImg from "../img/camera.png";
//data
const slideData = [
  {
    img: CameraImg,
    pretitle: "Special offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "Shop now"
  },
  {
    img: CameraImg,
    pretitle: "Special offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "Shop now"
  },
  {
    img: CameraImg,
    pretitle: "Special offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "Shop now"
  },
]

const MainSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      loop={false}
      pagination={{
        clickable: true,
      }}
      className="h-full max-w-lg mainSlider bg-primary xl:bg-mainSlider xl:bg-no-repeat lg:max-w-[650px] rounded-[8px] overflow-hidden drop-shadow-2xl "
    >
      <>
      {
        slideData.map((slide, index)=>{
          return <SwiperSlide key={index}>
            <div className="flex flex-col h-full lg:flex-row p-[20px] md:p-[60px] ">
              {/* text */}
              <div className="w-full lg:flex-1">
                <div className="mb-1 text-center uppercase lg:text-left">{slide.pretitle}</div>
                <div className="text-3xl md:text-[46px] font-semibold uppercase leading-none text-center xl:mb-20 mb-8 lg:text-left ">
                  {slide.titlePart1}<br/>
                  {slide.titlePart2}<br/>
                  {slide.titlePart3}
                </div>
                <button className="mx-auto btn btn-accent lg:mx-0">Shop now</button>
              </div>
              {/* img */}
              <div className="flex-1">
                <img className="xl:absolute xl:-right-16 xl:-bottom-12 xl:w-[500px] xl:h-[500px] " src={slide.img} alt="" />
              </div>
            </div>
          </SwiperSlide>
        })
      }
      </>
    </Swiper>
  );
};

export default MainSlider;
