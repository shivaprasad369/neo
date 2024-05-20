import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./style.css";

// import required modules
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
export default function Couple() {
  return (
    <div
      id="portfolio"
      className="bg-[#ece8e2] w-[100%] justify-center items-center"
    >
      <div className="lg:h-[40rem] md:h-[30rem] bg-transparent max-md:h-[20rem] w-[100%] justify-center items-center md:px-[3%]">
        <Swiper
          navigation={true}
          effect={"fade"}
           autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          modules={[EffectFade,Autoplay, Navigation]}
          className="mySwiper max-w-[1320px] bg-[#ece8e2] bg-transparent"
        >
          <SwiperSlide>
            <div className="flex flex-col relative justify-center items-center w-[100%]">
              <div className="grid lg:grid-cols-4 max-lg:grid-cols-3 md:gap-3 max-md:gap-1 max-md:h-[13.8rem] lg:h-[30rem] max-lg:h-[23rem]">
                <img
                  src={require("../assets/newImages/amer-1.jpg")}
                  alt=""
                  className="h-[100%] object-cover"
                />
                <img
                  src={require("../assets/newImages/amer-2.jpg")}
                  alt=""
                  className="h-[100%] object-cover"
                />
                <img
                  src={require("../assets/newImages/amer-3.jpg")}
                  alt=""
                  className="h-[100%] object-cover"
                />
                <img
                  src={require("../assets/newImages/amer-4.jpg")}
                  alt=""
                  className="max-lg:hidden h-[100%] object-cover"
                />
              </div>
              <div
                className="border-[3px]  max-lg:px-[2rem] absolute bottom-[-4rem] lg:flex max-lg::flex-col w-[75%]
                 md:justify-center lg:justify-around p-3 items-center border-[#ece8e2] bg-[#212529] "
                style={{ fontFamily: '"Antic Didone"' }}
              >
                <div className="lg:w-[40%] max-lg:text-center">
                  <h2
                    className="lg:text-[2rem] max-md:text-[1rem] max-lg:text-[1.5rem] font-[400] tracking-wider
                         text-[#ECE8E2] lg:w-[60%]"
                  >
                    {" "}
                    AMAR &amp; RADHIKA
                  </h2>
                </div>
                <div className="lg:border-r-[3px] max-lg:border-b-[2px] py-1 pb-1  border-[#ece8e2] lg:h-[6rem]" />
                <div className="items-center justify-center lg:w-[40%] pt-2">
                  <h3
                    className="text-[11px] leading-[1.3] max-md:text-[9px] max-lg:text-center tracking-widest md:w-[50%] text-[#ECE8E2] items-center  md:ml-[20%] uppercase"
                    style={{ fontFamily: '"Lora' }}
                  >
                    Seeing the World Differently, Capturing it Uniquely.
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col relative justify-center items-center w-[100%]">
              <div className="grid lg:grid-cols-4 max-lg:grid-cols-3 md:gap-3 max-md:gap-1 max-md:h-[13.8rem] lg:h-[30rem] max-lg:h-[23rem]">
                <img
                  src={require("../assets/newImages/NEO08828-scaled (1).jpg")}
                  alt=""
                  className="h-[100%] object-cover"
                />
                <img
                  src={require("../assets/newImages/NEO08920 2 (1).jpg")}
                  alt=""
                  className="h-[100%] object-cover"
                />
                <img
                  src={require("../assets/newImages/NEO09057 2.jpg")}
                  alt=""
                  className="h-[100%] object-cover"
                />
                <img
                  src={require("../assets/newImages/NEO09028 2.jpg")}
                  alt=""
                  className="max-lg:hidden h-[100%] object-cover"
                />
              </div>
              <div
                className="border-[3px] max-lg:px-[2rem] absolute bottom-[-4rem] lg:flex max-lg::flex-col w-[75%] md:justify-center lg:justify-around p-3 items-center border-[#ece8e2] bg-[#212529] "
                style={{ fontFamily: '"Antic Didone"' }}
              >
                <div className="lg:w-[40%] max-lg:text-center">
                  <h2 className="lg:text-[2rem] max-md:text-[1rem] max-lg:text-[1.5rem] font-[400] tracking-wider text-[#ECE8E2] lg:w-[60%]">
                    PRAJWAL &amp; SINDHU{" "}
                  </h2>
                </div>
                <div className="lg:border-r-[3px] max-lg:border-b-[2px] py-1 pb-1 border-[#ece8e2] lg:h-[6rem] max-lg:px-[5%]" />
                <div className="items-center justify-center lg:w-[40%] pt-2">
                  <h3
                    className="text-[11px] leading-[1.3] max-lg:text-center max-md:text-[9px] tracking-widest md:w-[50%] text-[#ECE8E2] items-center  md:ml-[20%] uppercase"
                    style={{ fontFamily: '"Lora' }}
                  >
                    memories in focus, where every clicks counts{" "}
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col relative justify-center items-center w-[100%]">
              <div className="grid lg:grid-cols-4 max-lg:grid-cols-3 md:gap-3 max-md:gap-1 max-md:h-[13.8rem] lg:h-[30rem] max-lg:h-[23rem]">
                <img
                  src={require("../assets/newImages/ra4.jpg")}
                  alt=""
                  className="h-[100%] object-cover"
                />
                <img
                  src={require("../assets/newImages/pgjbli5yugsgwexgtqzb.jpg")}
                  alt=""
                  className="h-[100%] object-cover"
                />
                <img
                  src={require("../assets/unoptiImages/ra3.jpg")}
                  alt=""
                  className="h-[100%] object-cover"
                />
                <img
                  src={require("./Wedding/images/achyut and revati1.jpg")}
                  alt=""
                  className="max-lg:hidden h-[100%] object-cover"
                />
              </div>

              <div
                className="border-[3px] max-lg:px-[2rem] absolute bottom-[-4rem] lg:flex max-lg::flex-col w-[75%] md:justify-center lg:justify-around p-3 items-center border-[#ece8e2] bg-[#212529] "
                style={{ fontFamily: '"Antic Didone"' }}
              >
                <div className="lg:w-[40%] max-lg:text-center">
                  <h2
                    className="lg:text-[2rem] max-lg:text-[1.5rem]
                         max-md:text-[1rem]  font-[400] tracking-wider text-[#ECE8E2] 
                         lg:w-[60%]"
                  >
                    ACHYUT &amp; REVATI
                  </h2>
                </div>
                <div className="lg:border-r-[3px] max-lg:border-b-[2px] py-1 pb-1 border-[#ece8e2] lg:h-[6rem]" />
                <div className="items-center justify-center lg:w-[40%] pt-2">
                  <h3
                    className="text-[11px] leading-[1.3] max-md:text-[9px]  max-lg:text-center tracking-widest md:w-[50%] text-[#ECE8E2] items-center  md:ml-[20%] uppercase"
                    style={{ fontFamily: '"Lora' }}
                  >
                    MEMORIES IN FOCUS, WHERE EVERY CLICKS COUNTS.{" "}
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col relative justify-center items-center w-[100%]">
              <div className="grid lg:grid-cols-4 max-lg:grid-cols-3 md:gap-3 max-md:gap-1 max-md:h-[13.8rem] lg:h-[30rem] max-lg:h-[23rem]">
                <img
                  src={require("../assets/unoptiImages/aa2.jpg")}
                  alt=""
                  className="h-[100%] object-cover"
                />
                <img
                  src={require("../assets/unoptiImages/aa3.jpg")}
                  alt=""
                  className="h-[100%] object-cover"
                />
                <img
                  src={require("../assets/unoptiImages/aa4.jpg")}
                  alt=""
                  className="h-[100%] object-cover"
                />
                <img
                  src={require("../assets/unoptiImages/akarsh and aishwarya1.jpg")}
                  alt=""
                  className="max-lg:hidden h-[100%] object-cover"
                />
              </div>

              <div
                className="border-[3px] max-lg:px-[2rem] absolute bottom-[-4rem] lg:flex max-lg:flex-col 
                w-[75%] md:justify-center lg:justify-around p-3 items-center border-[#ece8e2] bg-[#212529] 
                "
                style={{ fontFamily: '"Antic Didone"' }}
              >
                <div className="lg:w-[40%] max-lg:text-center">
                  <h2 className="lg:text-[2rem] max-md:text-[1rem]  max-lg:text-[1.5rem] font-[400] tracking-wider text-[#ECE8E2] lg:w-[80%]">
                    {" "}
                    AKARSH &amp; AISHWARYA
                  </h2>
                </div>
                <div className="lg:border-r-[3px] max-lg:border-b-[2px] py-1 pb-1 border-[#ece8e2] lg:h-[6rem]" />
                <div className="items-center justify-center lg:w-[40%] pt-2">
                  <h3
                    className="text-[11px] max-md:text-[9px] mb-[3] leading-[1.3] max-lg:text-center tracking-widest md:w-[50%] text-[#ECE8E2] items-center  md:ml-[20%] uppercase"
                    style={{ fontFamily: '"Lora' }}
                  >
                    LOVE'S JOURNEY BEGINS WITH THESE MOMENTS.{" "}
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
