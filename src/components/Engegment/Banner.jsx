import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/effect-fade";
import "../style.css";

// import required modules
import {
  Navigation,

  EffectFade,
} from "swiper/modules";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { delay, motion } from 'framer-motion';
export default function Banner() {
  const location = useLocation();

  useEffect(() => {
    const element = document.getElementById("home");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <div id='home' className='h-[100%] flex w-[100%] relative justify-center items-center overflow-hidden py-[5rem]'>
      <div className='flex w-[100%] max-w-[1320px] justify-center items-center h-fit'>
        <div className='lg:w-[80%] max-lg:w-[100%] md:h-[30rem]  bg-transparent' >
        <Swiper
          navigation={true}
          effect={"fade"}
          modules={[EffectFade, Navigation]}
          className="mySwiper justify-center items-center max-w-[1320px] "
        >
          <SwiperSlide>
            <img src={require('../../assets/unoptiImages/eg13.jpg')} className='object-cover w-[100%] h-[100%]' alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={require('../../assets/unoptiImages/e3.jpg')} className='object-cover w-[100%] h-[100%]' alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={require('../../assets/unoptiImages/e4.jpg')} className='object-cover w-[100%] h-[100%]' alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>
            <img src={require('../../assets/unoptiImages/eg2.jpg')} alt="" />
        </SwiperSlide> */}
        <SwiperSlide>
            <img src={require('../../assets/unoptiImages/eg6.png')} className='object-cover w-[100%] h-[100%]' alt="" />
        </SwiperSlide>
        </Swiper>
        </div>
      </div>
      <div style={{fontFamily:'Antic Didone'}} className='absolute bottom-2 tracking-wider z-20 justify-center items-center lg:w-[50%] w-[80%]  text-center border-[3px] border-white bg-[#272727] text-white'>
        <div className='flex flex-col px-[2rem] py-[1rem]'>
            <motion.h6 viewport={{once:true}} initial={{scale:0.4}} whileInView={{scale:1,transition:{type:'spring',ease:'easeIn',duration:1.5}}} className='md:text-[3rem] max-md:text-[2rem] max-sm:text-[1.5rem]'>ENGAGEMENT</motion.h6>
            <motion.spam viewport={{once:true}} initial={{scale:0.4}} whileInView={{scale:1,transition:{type:'spring',ease:'easeIn',duration:1.5,delay:0.3}}} className="md:text-[12px] max-md:text-[10px] text-[#968e6f]">FOR LOVE TO BE REMEMBERED IN ETERNITY</motion.spam>
        </div>
      </div>
    </div>
  )
}
