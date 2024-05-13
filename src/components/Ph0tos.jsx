import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/effect-fade";
import "./style.css";

// import required modules
import {
  Navigation,

  EffectFade,
} from "swiper/modules";
import { motion } from 'framer-motion';

export default function Ph0tos() {
  return (
    <div className='flex bg-[#ece8e2] lg:px-[10%] md:px-[5%] sm:px-[3%] md:pt-[7rem] max-md:pt-[3rem] overflow-hidden  h-[100%]  '>
       <motion.div 
      viewport={{once:true}} initial={{x:50}} whileInView={{x:0,transition:{type:'spring',ease:'easeIn',duration:2}}}
       className='max-xl:shadow-md overflow-hidden shadow-black max-xl:border-[5px] w-[100%] justify-center items-center  max-md:w-[100%]  max-xl:border-[#110e0e] h-[100%] '>

        <div 
         className='h-[100%] lg:h-[40rem] w-[100%]  justify-center overflow-hidden items-center  '>
        <Swiper
          navigation={true}
          effect={"fade"}
          modules={[EffectFade, Navigation]}
          className="mySwiper justify-center items-center max-w-[1320px] "
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
