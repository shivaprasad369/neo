import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import data from './Gall';
// import slide_image_1 from "../assets/youtube/y1.jpg";
// import slide_image_2 from "../assets/youtube/y2.jpg";
// import slide_image_3 from "../assets/youtube/y3.jpg";
// import slide_image_4 from "../assets/youtube/y4.jpg";
// import slide_image_5 from "../assets/youtube/y5.jpg";
// import slide_image_6 from "../assets/youtube/y6.jpg";
// import slide_image_7 from '../assets/newImages/NEO08975.jpg';
import AlertDialogSlide from "./Youtube";
// import { useState } from "react";

// import { FaPlay } from "react-icons/fa";
// import { useState } from "react";

function ImageSlider() {

  const [open, setOpen] = React.useState({
    opens: false,
    url: "",
  });
  // const {url,setUrl}=React.useState('')

  const handleClickOpen = (uri) => {
    setOpen({ opens: true, url: uri });

    // setUrl('https://www.youtube.com/watch?v=OtqxDT0IlHI&t=25s')
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div className="container bg-[#d7d6dc]  flex flex-col justify-center items-center">
      <h1
        className="lg:text-[2.3rem] md:text-[1.5rem] text-[#785F37] max-md:text-center
             max-md:text-[1.5rem] lg:leading-[2.7rem] tracking-wider  items-center text-center"
        style={{ fontFamily: 'Cinzel',fontStyle:'normal' }}
      >
        Memory Preservation
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: -20,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        // pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="swiper_container"
      >
       {data?.map((data,index)=>(
        <SwiperSlide
          className="swiperslide" key={data?.id}
          // onClick={() => {
          //   handleClickOpen(
          //     "https://www.youtube.com/embed/oSrkkdMfH1c?si=7B1ZXX6sX1tVWbIp"
          //   );
          // }}
        >
          <img className="relative" src={data?.img} alt="slide_image" />
          {/* <span style={{fontFamily: "Weiss-Fraktur"}}  className="w-full absolute flex tracking-wider justify-center items-center text-2xl md:text-3xl text-[#3f0224dd] font-semibold bottom-[10%]">
          Habib Family
          </span> */}
        </SwiperSlide>  )) }
       
        {/* <SwiperSlide className='swiperslide'onClick={()=>handleClickOpen}>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide> */}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      <AlertDialogSlide
        open={open.opens}
        url={open.url}
        setOpen={setOpen}
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
      />
      {/* <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <a href="https://www.youtube.com/@neo_weds">Watch more</a>
      </button> */}
      {/* <button className="p-[3px] relative bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg" onMouseEnter={()=>setBtn(true)} onMouseLeave={()=>setBtn(false)}> */}
  {/* <a id="link_button-1325-20" className="ct-link-button primary-btn" href="/contact-us/" target="_self">Connect with Us</a> */}
  {/* <div className={`absolute inset-0 w-full h-full bg-gradient-to-r from-[#785F37] to-[#c5b08d] ${btn && 'hidden'} rounded-lg `} /> */}
  {/* <div className="absolute inset-0 bg-gradient-to-r  hover:bg-gray-700" /> */}
  {/* <div id="link_button-1325-20" className="ct-link-button primary-btn px-8 py-2  rounded-[6px]  relative group transition duration-200 text-white font-bold hover:bg-transparent">
  <a href="https://www.youtube.com/@neo_wedsf"  style={{ fontFamily: 'Cinzel',fontStyle:'normal' }} className="flex gap-4 justify-center items-center">Watch more <span className=" bg-gray-500 p-2  rounded-full " ><FaPlay className=" text-xs   text-white "/> </span> </a>
  </div>
</button> */}
    </div>
  );
}

export default ImageSlider;
