import React from 'react';
import CategoryNav from '../components/CategoryNav'
import MainSlider from '../components/MainSlider'

import PromoImg1 from '../img/promo_img1.png'
import PromoImg2 from '../img/promo_img2.png'
const Hero = () => {
  return <section className='mb-[30px] w-full pt-36 lg:pt-0' >
    <div className='container mx-auto'>
    <div className='flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px] '>
      {/* SidBar */}
      <div>
        <CategoryNav />
      </div>
      {/* main slider */}
      <div className='w-full max-w-lg lg:max-w-[734px] mx-auto '>
        <MainSlider />
      </div>
      {/* promo imgs */}
      <div className='flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px] '>
        {/* promo 1 */}
        <div className='flex-1 grad h-[250px] rounded-[8px] overflow-hidden relative p-6 '>
          {/* text */}
          <div className='flex-col max-w-[144px] h-full justify-center '>
            <div className='text-[20px] uppercase font-medium leading-tight mb-4 '>Save 35% all dslr cameras</div>
            <a href="" className='uppercase text-accent'>
              Shop now
            </a>
          </div>
          {/* img */}
          <img className='absolute z-20 -top-4 -right-4' src={PromoImg1} alt="" />
        </div>
         {/* promo 2 */}
         <div className='flex-1 grad h-[250px] rounded-[8px] overflow-hidden relative p-6 '>
          {/* text */}
          <div className='flex-col max-w-[144px] h-full justify-center '>
            <div className='text-[20px] uppercase font-medium leading-tight mb-4 '>Save 25% all mirrorless cameras</div>
            <a href="" className='uppercase text-accent'>
              Shop now
            </a>
          </div>
          {/* img */}
          <img className='absolute z-20 top-4 -right-4' src={PromoImg2} alt="" />
        </div>
      </div>
      </div>
    </div>
  </section>;
};

export default Hero;
