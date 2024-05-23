import React from "react";
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
  Autoplay,
} from "swiper/modules";
// import { motion } from "framer-motion";
// import { useLocation } from "react-router-dom";
export default function Testimonial() {
 
  return (
    <div id="testimonial" className=" justify-center items-center   flex-col gap-10 w-[100%] sm:px-[3%] md:px-[5%] lg:px-[10%] max-md:px-[0%] pt-[3rem] flex overflow-hidden">
      {/* <div className="flex flex-col justify-center items-center gap-3 box-content"> */}
      <div  
       className="flex flex-col gap-3 max-w-[1320px] justify-center items-center">
        <h2
          className="text-[#968e6f] text-[13px] font-[400] justify-center items-center leading-5"
          style={{ fontFamily: '"Lora"' }}
        >
          MY PROMISE TO YOU
        </h2>
        <h2
          className="text-[#292929] md:text-[2rem] lg:text-[2.5rem] max-md:text-[1.5rem]  md:w-[70%] text-center md:leading-[3rem]"
          style={{ fontFamily: "'Antic Didone'" }}
        >
          ONLY AUTHENTIC FEELINGS CAPTURED FOR THE LOVING SOUL
        </h2>
      </div>
      <div 
       className="w-[100%] md:h-[28rem] max-md:h-[55rem] overflow-hidden flex">
        <Swiper
          navigation={true}
          effect={"fade"}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          modules={[EffectFade,Autoplay, Navigation]}
          className="mySwiper max-w-[1320px] h-[100%] overflow-hidden w-fit px-[2rem]"
        >
          <SwiperSlide>
            <div className="flex gap-10 bg-[#292929] h-[100%] justify-center items-center box-content ">
            <div className="flex md:gap-1 lg:gap-16 w-[100%] h-[100%] max-md:flex-col max-md:px-[4%] md:px-[3%] lg:px-[3rem] py-[1.5rem] shadow-xl">
                <img
                  className="lg:w-[22rem] md:w-[22rem] md:h-[] max-md:h-[100%] px-3 object-cover max-sm:h-[26rem]"
                  src={require("../assets/newImages/nikitha and rajendra 2.jpg")}
                  alt=""
                />
                <div className="flex flex-col pt-2 px-3 max-md:mt-[2rem] text-[#ece8e2] justify-center text-left  ">
                  <p
                    className="text-[#968e6f] text-[11px] tracking-widest uppercase justify-start w-fit"
                    style={{ fontFamily: "'Lora'" }}
                  >
                    Warmest Words From
                  </p>
                  <h3
                    className="md:text-[2.2rem] max-md:text-[1.7rem] tracking-wider"
                    style={{ fontFamily: "'Antic Didone'" }}
                  >
                    RAJENDRA &amp; NIKITA
                  </h3>
                  <h4
                    style={{ fontFamily: "'Lora'" }}
                    className="text-justify text-[12px] mt-[0.8rem] font-[400] tracking-wider leading-5"
                  >
                    From the initial consultation to the final images, Vikas
                    Miskin and their team exceeded our expectations. Their
                    ability to capture the essence of our love story is
                    unparalleled. Every photograph is a testament to their skill
                    and passion. The attention to detail, genuine emotion, and
                    professionalism shine through in each frame. Thank you,
                    Neoweds for turning our special moments into everlasting
                    memories. We wholeheartedly recommend their services to
                    anyone seeking a photographer who truly understands and
                    embraces the beauty of love.
                  </h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex gap-10 w-[100%] h-[100%] bg-[#292929] justify-center items-center box-content ">
            <div className="flex md:gap-1 lg:gap-16 w-[100%] h-[100%] max-md:flex-col max-md:px-[4%] md:px-[3%] lg:px-[3rem] py-[1.5rem] shadow-xl">
                <img
                  className="lg:w-[22rem] md:w-[22rem] xl:w-[25rem] md:h-[] max-md:h-[100%] px-3 object-cover max-sm:h-[26rem]"
                  src={require("../assets/newImages/shreya.png")}
                  alt=""
                />
                <div className="flex flex-col pt-2 px-3 max-md:mt-[2rem] text-[#ece8e2] justify-center text-left  ">
                  <p
                    className="text-[#968e6f] text-[11px] tracking-widest uppercase justify-start w-fit"
                    style={{ fontFamily: "'Lora'" }}
                  >
                    Warmest Words From
                  </p>
                  <h3
                    className="md:text-[2.2rem] max-md:text-[1.7rem] tracking-wider"
                    style={{ fontFamily: "'Antic Didone'" }}
                  >
                    SHREYA &amp; VENKATESH
                  </h3>
                  <h4
                    style={{ fontFamily: "'Lora'" }}
                    className="text-justify text-[12px] mt-[0.8rem] font-[400] tracking-wider leading-5"
                  >
                    We are incredibly thankful to Neoweds for capturing the
                    essence of our wedding day so beautifully. Their skilful eye
                    and thoughtful approach resulted in a collection of images
                    that not only documented the events but also told our unique
                    love story. Vikas Miskin was a joy to work
                    with—professional, accommodating, and genuinely passionate
                    about their craft. The photographs are a cherished reminder
                    of the magic of our wedding, and we wholeheartedly recommend
                    to couples seeking a talented and dedicated photographer.
                  </h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex gap-10 h-[100%] overflow-hidden bg-[#292929] justify-center items-center box-content ">
            <div className="flex md:gap-1 lg:gap-16 w-[100%] h-[100%] max-md:px-[4%]  max-md:flex-col md:px-[3%] lg:px-[3rem] py-[1.5rem] shadow-xl">
                <img
                  className="lg:w-[22rem] md:w-[22rem] xl:w-[25rem] md:h-[] max-md:h-[100%] object-cover px-3 max-sm:h-[26rem]"
                  src={require("../assets/unoptiImages/eg2.jpg")}
                  alt=""
                />
                <div className="flex flex-col pt-5 px-3 max-md:mt-[2rem] text-[#ece8e2] justify-center text-left  ">
                  <p
                    className="text-[#968e6f] text-[11px] tracking-widest uppercase justify-start w-fit"
                    style={{ fontFamily: "'Lora'" }}
                  >
                    Warmest Words From
                  </p>
                  <h3
                    className="md:text-[2.2rem] max-md:text-[1.7rem] tracking-wider"
                    style={{ fontFamily: "'Antic Didone'" }}
                  >
                    ANKIT &amp; DHARA
                  </h3>
                  <h4
                    style={{ fontFamily: "'Lora'" }}
                    className="text-justify text-[12px] mt-[2rem] font-[400] tracking-wider leading-5"
                  >
                    I couldn’t be this happier with the photos captured by
                    Neoweds team. Their talent and creativity shine through in
                    every shot. The entire process, from the initial
                    consultation to the final delivery, was seamless. I
                    appreciate their professionalism, attention to detail, and
                    ability to make the shoot enjoyable. “Working with Neoweds
                    was a fantastic experience. The photos exceeded my
                    expectations, and the professionalism displayed throughout
                    the process made the entire experience enjoyable. I would
                    gladly recommend to anyone looking for high-quality
                    photography.
                  </h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* </div> */}
    </div>
  );
}
