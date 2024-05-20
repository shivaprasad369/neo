import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import "swiper/css/effect-fade";
import "./photo.css";
import 'swiper/css/zoom';
// import required modules
import {
  Navigation,
  Autoplay,
  Zoom,
  EffectFade,
  Thumbs,
  FreeMode,
} from "swiper/modules";
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Ph0tos() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className='flex justify-center xl:mb-[-10rem] xl:mt-[-5rem] items-center bg-[#ece8e2] lg:px-[5%] md:px-[5%] sm:px-[3%] md:pt-[1rem] max-md:pt-[3rem] overflow-hidden  '>
       <motion.div 
      // viewport={{once:true}} initial={{x:50}} whileInView={{x:0,transition:{type:'spring',ease:'easeIn',duration:2}}}
       className='max-xl:shadow-md xl:h-[70rem] max-w-[1320px] flex  overflow-hidden shadow-black max-xl:border-[5px] w-[100%] justify-center items-center  max-md:w-[100%]  max-xl:border-[#110e0e]  '>

        <div 
         className='xl:h-[50rem]   w-[100%] max-w-[1320px]  flex flex-col justify-center overflow-hidden items-center  '>
        <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        zoom={true}
        navigation={true}
        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
        modules={[FreeMode,Zoom, Navigation, Thumbs]}
        className="mySwiper2 swiper2 max-w-[1320px] flex justify-center items-center h-[30rem]"
      >
          <SwiperSlide>
      <img src={require('../assets/couples/2.jpg')} alt="" className=' w-[100%] justify-center object-cover items-center '/>
      </SwiperSlide>
      <SwiperSlide>
      <img src={require('../assets/couples/3.jpg')} alt="" className=' w-[100%] justify-center items-center object-cover '/>

      </SwiperSlide>
      <SwiperSlide>
      <img src={require('../assets/couples/4.jpg')} alt="" className=' w-[100%] justify-center items-center  object-cover'/>

      </SwiperSlide>
      <SwiperSlide>
      <img src={require('../assets/s.jpg')} alt="" className=' w-[100%] justify-center items-center object-cover'/>

      </SwiperSlide>
      <SwiperSlide>
      <img src={require('../assets/s2.jpg')} alt="" className=' w-[100%] justify-center items-center object-cover'/>

      </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        zoom={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation,Zoom ,Thumbs]}
        className="mySwipe1 swiper1"
      >
         <SwiperSlide>
      <img src={require('../assets/couples/2.jpg')} alt="" className=' w-[100%] justify-center object-cover items-center '/>
      </SwiperSlide>
      <SwiperSlide>
      <img src={require('../assets/couples/3.jpg')} alt="" className=' w-[100%] justify-center items-center object-cover '/>

      </SwiperSlide>
      <SwiperSlide>
      <img src={require('../assets/couples/4.jpg')} alt="" className=' w-[100%] justify-center items-center  object-cover'/>

      </SwiperSlide>
      <SwiperSlide>
      <img src={require('../assets/s.jpg')} alt="" className=' w-[100%] justify-center items-center object-cover'/>

      </SwiperSlide>
      <SwiperSlide>
      <img src={require('../assets/s2.jpg')} alt="" className=' w-[100%] justify-center items-center object-cover'/>

      </SwiperSlide>
      </Swiper>
        </div>
       </motion.div>
    </div>
  )
}
