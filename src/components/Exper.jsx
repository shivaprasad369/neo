import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

export default function Exper() {
  return (
    <div id="services" className=" lg:px-[10%] max-md:px-[3%] md:px-[5%] lg:py-[6rem]  md:py-[3rem] max-md:py-[2rem]
     bg-[#ece8e2] justify-center items-center">
      <motion.h2 viewport={{once:true}} initial={{y:100}} whileInView={{y:0,transition:{type:'spring',ease:'easeIn',duration:1.5}}}
        style={{ fontFamily: "Antic Didone" }}
        className="lg:text-[2.5rem] max-md:text-[1.5rem] md:text-[2rem]  text-[#292929] tracking-wider 
        font-[400] mb-[2rem] text-center
          items-center justify-center"
      >
        CHOOSE YOUR EXPERIENCE
      </motion.h2>
      <motion.div viewport={{once:true}} initial={{x:-100}} whileInView={{x:0,transition:{type:'spring',ease:'easeIn',duration:2}}}
      className="bg-[#292929] max-w-[1320px] w-fit justify-center text-center  items-center">
        <div className="md:flex md:justify-around max-md:flex-col items-center lg:gap-20 md:gap-10 max-md:gap-8
         md:px-[2rem] lg:px-[5rem] max-md:px-[7%] py-[5%] lg:py-[5rem] max-md:[3%] w-[100%]">
          <div className="flex flex-col gap-3 items-center md:w-[33%]">
            <motion.img whileHover={{scale:1.03,transition:{type:'spring',ease:'easeIn', duration:1}}}
              src={require("../assets/newImages/eg1.jpg")}
              alt=""
              className="h-[90%] rounded-t-full object-cover w-[100%]"
            />
            <h3
              className="text-[14px]  md:mt-[2rem] font-[200] text-[#e6d6c7] uppercase tracking-wider items-center"
              style={{ fontFamily: '"Lora"' }}
            >
              Engagement Photography
            </h3>
            <Link
              to="/engegment/#home"
              className="text-[14px] font-[400] text-[#e6d6c7] hover:text-blue-600 transition-all"
              style={{ fontFamily: '"Lora"' }}
            >
              View More
            </Link>
          </div>
          <div className="flex flex-col max-md:flex-col-reverse gap-3 max-md:mt-[2rem] items-center md:w-[33%]">
            <Link
              to="/pre-wedding/#home"
              className="max-md:block md:hidden text-[14px] mb-[2rem] font-[400] text-[#e6d6c7] hover:text-blue-600 transition-all"
              style={{ fontFamily: '"Lora"' }}
            >
              View More
            </Link>
            <h3
              className="text-[14px]   font-[200] text-[#e6d6c7] uppercase tracking-wider items-center"
              style={{ fontFamily: '"Lora"' }}
            >
              PRE-WEDDING PHOTOGRAPHY
            </h3>
            <Link
              to="/pre-wedding/#home"
              className="max-md:hidden text-[14px]  mb-[2rem] font-[400] text-[#e6d6c7] hover:text-blue-600 transition-all"
              style={{ fontFamily: '"Lora"' }}
            >
              View More
            </Link>
            <motion.img whileHover={{scale:1.03,transition:{type:'spring',ease:'easeIn', duration:1}}}
              src={require("../assets/newImages/pre-wedd.jpg")}
              alt=""
              className="h-[90%] max-md:rounded-t-full  max-md:w-[100%] object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 items-center md:w-[33%]">
          <motion.img whileHover={{scale:1.03,transition:{type:'spring',ease:'easeIn', duration:1}}}
              src={require("../assets/newImages/ra4.jpg")}
              alt=""
              className="h-[900%] object-cover rounded-t-full"
            />
            <h3
              className="text-[14px]  md:mt-[2rem] font-[200] text-[#e6d6c7] uppercase tracking-wider items-center"
              style={{ fontFamily: '"Lora"' }}
            >
              WEDDING PHOTOGRAPHY
            </h3>
            <Link
              to="/wedding/#home"
              className="text-[14px] font-[400] text-[#e6d6c7] hover:text-blue-600 transition-all"
              style={{ fontFamily: '"Lora"' }}
            >
              View More
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
