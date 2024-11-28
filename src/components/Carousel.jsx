import React from 'react'
import Image from './Image'
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = () => {
  return (
    <div className='w-full mx-auto mt-12 mb-6 z-0 group'>
      <Swiper
        style={{"--swiper-pagination-color": "#fff","--swiper-pagination-bullet-size": "10px","--swiper-navigation-color": "#fff"}}
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
        loop={true}
        className='rounded-lg'
      >
        <SwiperSlide className='relative w-full h-144'><Image src={"https://picsum.photos/seed/picsum/1250/500"} className={""}/><div className='absolute top-0 left-0 w-full h-144  backdrop-brightness-50 bg-white/20'></div> </SwiperSlide>
        <SwiperSlide className='relative w-full h-144'><Image src={"https://picsum.photos/seed/picsum/1250/500"} className={""}/><div className='absolute top-0 left-0 w-full h-144  backdrop-brightness-50 bg-white/20'></div> </SwiperSlide>
        <SwiperSlide className='relative w-full h-144'><Image src={"https://picsum.photos/seed/picsum/1250/500"} className={""}/><div className='absolute top-0 left-0 w-full h-144  backdrop-brightness-50 bg-white/20'></div> </SwiperSlide>
        <SwiperSlide className='relative w-full h-144'><Image src={"https://picsum.photos/seed/picsum/1250/500"} className={""}/><div className='absolute top-0 left-0 w-full h-144  backdrop-brightness-50 bg-white/20'></div> </SwiperSlide>
        <SwiperSlide className='relative w-full h-144'><Image src={"https://picsum.photos/seed/picsum/1250/500"} className={""}/><div className='absolute top-0 left-0 w-full h-144  backdrop-brightness-50 bg-white/20'></div> </SwiperSlide>

      </Swiper>
 </div>
  )
}

export default Carousel