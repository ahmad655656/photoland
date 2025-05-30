import React from 'react';
 //import swiper react components
 import { Swiper, SwiperSlide } from 'swiper/react'

 //import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../slider.css'
//import required modules
import { Pagination, Navigation } from 'swiper';

//components
import Product from '../components/Product'
const ProductSlider = ({ data }) => {
  return <Swiper modules={[Pagination, Navigation]} loop={false} navigation={true} breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 30
    },
  }}
  pagination={{ 
    clickable: true,
   }} className='mx-auto productSlider max-w-[360px] md:max-w-lg xl:max-w-[1300px]  ' >
    <>
    {data?.map((product, index) => {
      return <SwiperSlide key={index}>
        <Product product={product} />
      </SwiperSlide>
    })}
    </>
  </Swiper>;
};

export default ProductSlider;
