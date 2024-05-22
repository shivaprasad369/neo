import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import slide_image_1 from "../assets/youtube/y1.jpg";
import slide_image_2 from "../assets/youtube/y2.jpg";
import slide_image_3 from "../assets/youtube/y3.jpg";
import slide_image_4 from "../assets/youtube/y4.jpg";
import slide_image_5 from "../assets/youtube/y5.jpg";
import slide_image_6 from "../assets/youtube/y6.jpg";
// import slide_image_7 from '../assets/newImages/NEO08975.jpg';
import AlertDialogSlide from "./Youtube";

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
    <div className="container bg-[#ece8e2] flex flex-col justify-center items-center">
      <h1
        className="lg:text-[2.3rem] md:text-[1.5rem] text-[#292929] max-md:text-center
             max-md:text-[1.5rem] lg:leading-[2.7rem] tracking-wider uppercase items-center text-center"
        style={{ fontFamily: '"Antic Didone"' }}
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
        <SwiperSlide
          className="swiperslide"
          onClick={() => {
            handleClickOpen(
              "https://www.youtube.com/embed/oSrkkdMfH1c?si=7B1ZXX6sX1tVWbIp"
            );
          }}
        >
          <img className="relative" src={slide_image_1} alt="slide_image" />
          <span style={{fontFamily: "Weiss-Fraktur"}}  className="w-full absolute flex tracking-wider justify-center items-center text-2xl md:text-3xl text-[#3f0224dd] font-semibold bottom-[10%]">
          Habib Family
          </span>
        </SwiperSlide>
        <SwiperSlide
          className="swiperslide"
          onClick={() =>
            handleClickOpen(
              "https://www.youtube.com/embed/fbfB3Wv7KnU?si=-IANu8CVKFIfA2rH"
            )
          }
        >
          <img className="relative" src={slide_image_2} alt="slide_image" />
          <span style={{fontFamily: "Weiss-Fraktur"}}  className="w-full absolute flex tracking-wider justify-center items-center text-2xl md:text-3xl text-[#471704dd] font-semibold bottom-[10%]">

          Pavan & Samita
          </span>
        </SwiperSlide>
        <SwiperSlide
          className="swiperslide"
          onClick={() =>
            handleClickOpen(
              "https://www.youtube.com/embed/kcQoAPhFUYw?si=ylPtUpVc_nSnrwe1"
            )
          }
        >
          <img src={slide_image_3} alt="slide_image" className="relative" />
          <span style={{fontFamily: "Weiss-Fraktur"}}  className="w-full absolute flex tracking-wider justify-center items-center text-2xl md:text-3xl text-[#020a20dd] font-semibold bottom-[10%]">
          Sneha & Rajath
          </span>
        </SwiperSlide>
        <SwiperSlide
          className="swiperslide"
          onClick={() =>
            handleClickOpen(
              "https://www.youtube.com/embed/AKa_gG-pkT4?si=jup5mmIim_fEFEXv"
            )
          }
        >
          <img src={slide_image_4} alt="slide_image" className="relative" />
          <span style={{fontFamily: "Weiss-Fraktur"}}  className="w-full absolute flex tracking-wider justify-center items-center text-2xl md:text-3xl text-[#f7f4f3] font-semibold bottom-[10%]">
          Nitesh & Purnashree
          </span>
        </SwiperSlide>
        <SwiperSlide
          className="swiperslide"
          onClick={() =>
            handleClickOpen(
              "https://www.youtube.com/embed/lPNNEs2AhRU?si=5EzNTOeQu5mVgFQD"
            )
          }
        >
          <img src={slide_image_5} alt="slide_image" className="relative" />
          <span style={{fontFamily: "Weiss-Fraktur"}}  className="w-full absolute flex tracking-wider justify-center items-center text-2xl md:text-3xl text-[#2d3602dd] font-semibold bottom-[10%]">
            Deepti & Chetan
          </span>
        </SwiperSlide>
        <SwiperSlide
          className="swiperslide"
          onClick={() =>
            handleClickOpen(
              "https://www.youtube.com/embed/TYMeDC6whfA?si=ve4gVBkyR_8VNL9y"
            )
          }
        >
          <img src={slide_image_6} alt="slide_image" className="relative" />
          <span style={{fontFamily: "Weiss-Fraktur"}}  className="w-full absolute flex tracking-wider justify-center items-center text-2xl md:text-3xl text-[#021310dd] font-semibold bottom-[10%]">
             Akarsh & Aishwary
          </span>
        </SwiperSlide>
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
      <button className="p-[3px] relative">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
  <a href="https://www.youtube.com/@neo_weds">Watch more</a>
  </div>
</button>
    </div>
  );
}

export default ImageSlider;
