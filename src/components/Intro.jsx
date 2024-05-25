import { motion } from "framer-motion";
import React, { useState } from "react";
// import { FaPlay } from "react-icons/fa6";
// import { useLocation } from "react-router-dom";
// import video from '../assets/MEHENDI TEASER _ PAVAN & SMITA _ HUBLI - DHARWAD.mp4'

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-cards';

import './intro.css';

// import required modules
import { EffectCards,Autoplay } from 'swiper/modules';
import { FaPlay } from "react-icons/fa";
export default function Intro() {
  const [btn,setBtn] =useState(false)
  return (
    <div
      id="about"
      className=" justify-center items-center  h-full overflow-hidden flex box-content max-md:px-[5%] md:px-[2%] xl:px-[10%] md:pt-[3rem] pb-[3rem]"
    >
      <div className="relative max-w-[1320px] md:flex max-md:flex-col justify-center items-center lg:gap-16 md:gap-20 max-md:gap-10 w-[100%]">
        <motion.div
          viewport={{ once: true }}
          initial={{ x: -200 }}
          whileInView={{
            x: 0,
            transition: { type: "spring", ease: "easeIn", duration: 1.5 },
          }}
          className="flex relative w-[100%] md:w-[40%] gap-[2rem] justify-center items-center  "
        >
          <motion.div
            // whileHover={{
            //   scale: 1.03,
            //   transition: { ease: "easeInOut", type: "spring", duration: 1 },
            // }}
            className="md:mr-[3rem] flex flex-col gap-5 justify-center items-center"
          >
             <Swiper
        effect={'cards'}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        cardsEffect= {
        { 
           perSlideOffset: 8, // Space between cards in px
          perSlideRotate: 3} // Rotation of cards in degrees
        }
        modules={[EffectCards,Autoplay]}
        
        className="mySwiper  swipers"
      >
        <SwiperSlide><iframe width="100%" height="90%" src="https://www.youtube.com/embed/oSrkkdMfH1c?si=b4SxhpEsDa207FPz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
        <SwiperSlide><iframe width="100%" height="90%" src="https://www.youtube.com/embed/jHPtKSfGSec?si=6l_b-s52SZ9udIP-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
        <SwiperSlide><iframe width="100%" height="90%" src="https://www.youtube.com/embed/bccMFEAg6wQ?si=Zm8m-CQYyb5oTUZA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
        <SwiperSlide><iframe width="100%" height="90%" src="https://www.youtube.com/embed/AKa_gG-pkT4?si=u6Jhgc550yzf6K1W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
      <button className="p-[3px] max-md:mb-[3rem] relative bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg" onMouseEnter={()=>setBtn(true)} onMouseLeave={()=>setBtn(false)}>
  {/* <a id="link_button-1325-20" className="ct-link-button primary-btn" href="/contact-us/" target="_self">Connect with Us</a> */}
  <div className={`absolute inset-0 w-full h-full bg-gradient-to-r from-[#785F37] to-[#c5b08d] ${btn && 'hidden'} rounded-lg `} />
  {/* <div className="absolute inset-0 bg-gradient-to-r  hover:bg-gray-700" /> */}
  <div id="link_button-1325-20" className="ct-link-button primary-btn px-8 py-2  rounded-[6px]  relative group transition duration-200 text-white font-bold hover:bg-transparent">
  <a href="https://www.youtube.com/@neo_wedsf"  style={{ fontFamily: 'Cinzel',fontStyle:'normal' }} className="flex gap-4 justify-center items-center">Watch more <span className=" bg-gray-500 p-2  rounded-full " ><FaPlay className=" text-xs   text-white "/> </span> </a>
  </div>
</button>
            {/* <video controls poster={require('../assets/video.png')} muted  loop autoPlay controls={false} className="rotate-[-4deg]  h-[100%]">
              <source src={video} type="video/mp4" />
          {/* <source src="movie.ogg" type="video/ogg"/> */}
  
            {/* </video>  */}
            {/* <img
              src={require("../assets/s2.jpg")}
              alt=""
              className="shadow-[#636161] rotate-[-4deg] object-cover shadow-lg "
            /> */}
          </motion.div>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ x: 200 }}
          whileInView={{
            x: 0,
            transition: { type: "spring", ease: "easeIn", duration: 1.5 },
          }}
          className="flex flex-col  gap-5 md:w-[40%]"
        >
          <h1
            style={{ fontFamily: "Taken by Vultures Demo"}}
            className=" w-full text-[#785F37] pb-[-5rem] font-normal tracking-wider  md:ml-[-5rem] max-md:ml-[-3rem] max-md:mt-[-2rem] mb-[-2rem] text-center left-[55%] h-full top-[2rem] -z-0 text-[4rem] capitalize "
          >
            Vikas Miskin
          </h1>
          <h2
            className="lg:text-[2rem] md:text-[1.5rem]  text-[#785F37] max-md:text-center
             max-md:text-[1.5rem] lg:leading-[2.5rem] tracking-wider "
             style={{ fontFamily: 'Cinzel',fontStyle:'normal' }}
          >
            Celebrating Eternal Love: A Glance Into The Perfect Wedding Moment
          </h2>
          {/* <h3
            className="text-[15px] text-[#292929] font-[400]"
            style={{ fontFamily: '"Lora"' }}
          >
            I AM VIKAS MISKIN, YOUR PHOTOGRAPHER,
          </h3> */}
          <p
            className="text-[15px] font-[400] tracking-wider text-justify leading-7 text-[#444444]"
            style={{ fontFamily: '"Lora"' }}
          >
            {" "}
            I have been in the business for almost seven years. The NEOWEDS crew
            which is team of 83 well professional photographers has photographed
            over 800 weddings and over 300 engagement photos for different
            couples from throughout the nation. We are pleased to announce that
            we have expanded our work by finishing more than 100 fashion shoots.
            {/* Our team has also handled some well-known brand shoots including
            Shreelaxmida's jewelry and jack and jones also worked with many
            celebrities */}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
