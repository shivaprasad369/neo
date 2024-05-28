import React from "react";
// Import Swiper React components

import bg1 from "../assets/banner.jpg";
import bg2 from "../assets/b3.jpg";
import bg3 from "../assets/b1.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Banner.css";
// import './styles.css';

// import required modules

import { FaFacebook, FaYoutube } from "react-icons/fa";

import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FaSquareInstagram } from "react-icons/fa6";
export default function Banner() {
  const location = useLocation();

  useEffect(() => {
    const element = document.getElementById("home");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <div id="home" className="relative">
      <div className="relative justify-center items-center  h-screen overflow-hidden">
        <div
          className="absolute left-0 w-[100%]  h-full "
          style={{ zIndex: -1 }}
        />
        <div className="absolute w-full h-full ">
          <div id="ReactBackgroundSlider">
          <figure
              style={{ backgroundImage: `url(${bg3})`, animationDelay: "12s" }}
            ></figure>
          <figure
              style={{ backgroundImage: `url(${bg2})`, animationDelay: "0s" }}
            ></figure>
            <figure
              style={{ backgroundImage: `url(${bg1})`, animationDelay: "6s" }}
            ></figure>
            
        
          </div>
          {/* <BackgroundSlider
          images={[bg1, bg2, bg3]}
          duration={5}
          transition={1}
          
          
          className="z-40 h-full overflow-hidden absolute"
        /> */}
        </div>
        <div
          style={{ zIndex: 2 }}
          className="absolute top-[71%] flex w-[100%]  z-4 flex-col flex-wrap justify-center items-center 
         text-white uppercase tracking-wider "
        >
          <h4
            className="text-3xl justify-center items-center text-center"
            style={{ fontFamily: "'Domine', sans-serif" }}
          >
            
          </h4>
          
          <motion.span viewport={{once:true}} initial={{scale:0.4}}
           whileInView={{scale:1,transition:{type:'spring',ease:'easeIn',duration:1}}}
            className="md:text-[5rem]  leading-[2.2rem]  text-center uppercase font-extrabold max-md:text-[2.5rem] 
             max-md:flex-wrap text-[rgba(241,240,237,0.7)]"
            style={{fontFamily: "'Intro Demo', sans-serif "}}
          >
        {/* 𝐰𝐞𝐝𝐝𝐢𝐧𝐠<br />𝐏𝐡𝐨𝐭𝐨𝐠𝐫𝐚𝐩𝐡𝐞 */}
        Neo weds<br/>
            <span style={{fontFamily:'Lora'}} className="text-[18px] font-normal leading-[35px] tracking-wider text-white">Weddings | Films | Events</span>
          </motion.span>
          {/* <p className='flex text-xl pt-[1.5rem]' style={{fontFamily: "'Overpass', sans-serif"}}> we will help to tell your love story</p> */}
          <motion.button viewport={{once:true}} initial={{scale:0.9}} whileHover={{scale:1,transition:{type:'spring',ease:'easeIn',duration:1}}} 
           className="mt-[1.8rem] border-0 rounded-l-full rounded-r-full px-[2.5rem] py-3 uppercase text-text bg-gradient-to-r from-[#785F37] to-[#c5b08d]">
           
           <a href="https://wa.link/gyll3l">
            Inquiry
            </a>
          </motion.button>
        </div>
      </div>
      {/* <div className='absolute bottom-[-2rem] w-full h-[6rem] bg-[#c7bdbd35]'></div> */}
      <div>
        <div className="flex gap-[20px] fixed top-[55%] px-2 z-40 py-2 right-0 flex-col bg-white   ">
         <a href="https://www.instagram.com/neo_weds/?utm_source=qr&igsh=emlxOHhjZHJpM3kz"  className="h-[1.2rem]">

          <FaSquareInstagram
            width={50}
            className="hover:text-pink-400 cursor-pointer transition-all text-[1.4rem]   rounded-md"
          />
         </a>
         <a href="https://youtube.com/@neo_weds?si=DJtusu-U61OdhECi" className="h-[1.2rem]">

          <FaYoutube 
            width={50}
            className="hover:text-red-500 transition-all cursor-pointer text-[1.4rem]    h-fit rounded-sm"
          />
         </a>
         <a href="#facebook" className="h-[1.2rem]">

          <FaFacebook   
            width={50}
            className="hover:text-blue-500 transition-all text-[1.4rem] cursor-pointer     rounded-full"
          />
         </a>
        </div>
      </div>
    </div>
  );
}
