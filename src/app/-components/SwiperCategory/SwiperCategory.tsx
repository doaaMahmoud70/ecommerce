"use client"
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import categories from '@/app/categories/page';
import { Category } from '@/types/products.type';
import Image from 'next/image';

const SwiperCategory=({categories}:{categories:Category})=>{
   return(
    <div>
<Swiper
      spaceBetween={0}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      modules={[Autoplay]}
     
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}

    >
  {categories.map((categories:Category,idx:number)=>    <SwiperSlide key={idx}>
   <Image width={500} height={500} src={categories.image} alt='' className='h-[200px] object-cover w-full'/>
   <p className='my-3 text-center'>{categories.name}</p>
    </SwiperSlide>)}

   
</Swiper>

    </div>
    )
}
export default SwiperCategory