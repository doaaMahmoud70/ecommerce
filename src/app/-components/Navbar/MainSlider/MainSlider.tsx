'use client'
import React, { use } from 'react'
import banner2 from './../../../../../public/screens/slider/grocery-banner-2.jpeg'
import slider1 from './../../../../../public/screens/slider/slider-image-1.jpeg'
import slider2 from './../../../../../public/screens/slider/slider-image-2.jpeg'
import slider3 from './../../../../../public/screens/slider/slider-image-3.jpeg'
import banner from './../../../../../public/screens/slider/grocery-banner.png'
import slider from './../../../../../public/screens/slider/slider-2.jpeg'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
const MainSlider=()=>{
    return(
    <div className='mb-10 flex'>
        <div className='w-2/3'>
           <Swiper
    
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
     
        modules={[Autoplay]}
  spaceBetween={0}
  slidesPerView={1}
  loop={true}
  autoplay={{
    delay: 1000,
    disableOnInteraction: false,
  }}
    >
      <SwiperSlide>
        <Image className='h-[400px] object-cover' src={slider3} alt=''/>
    </SwiperSlide>

          <SwiperSlide>
        <Image className='h-[400px] object-cover' src={slider1} alt=''/>
    </SwiperSlide>

          <SwiperSlide>
        <Image className='h-[400px] object-cover' src={slider2} alt=''/>
    </SwiperSlide>
</Swiper>
        </div>
        <div className='w-1/3'>
        <Image className='h-[200px] object-cover' src={banner} alt=''/>
        <Image className='h-[200px] object-cover' src={banner2} alt=''/>
           
</div>
    </div>
    )

}
export default MainSlider