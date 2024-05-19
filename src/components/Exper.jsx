import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Exper() {
  const [bg,setBg]= useState(false)
  const [preBg,setPreBg]= useState(false)
  const [wedBg,setWedBg]= useState(false)
  return (
    <div id="services" className=" lg:px-[10%] max-md:px-[3%] overflow-hidden md:px-[5%] lg:pb-[5rem]  md:py-[3rem] max-md:py-[1.5rem]
     bg-[#ece8e2] justify-center items-center">
      <motion.h2 viewport={{once:true}} initial={{y:100}} whileInView={{y:0,transition:{type:'spring',ease:'easeIn',duration:1.5}}}
        style={{ fontFamily: "Antic Didone" }}
        className="lg:text-[2.5rem] max-md:text-[1.5rem] md:text-[2rem]  text-[#292929] tracking-wider 
        font-[400] mb-[2rem] text-center
          items-center justify-center"
      >
        CHOOSE YOUR EXPERIENCE
      </motion.h2>
      <motion.div viewport={{once:true}} initial={{opacity:0}} whileInView={{opacity:1,transition:{type:'spring',ease:'easeIn',duration:2}}}
      className="bg-[#292929] max-w-[1320px] w-fit justify-center text-center  items-center">
        <div className="md:flex md:justify-around max-md:flex-col items-center lg:gap-20 md:gap-10 max-md:gap-8
         md:px-[2rem] lg:px-[5rem] max-md:px-[7%] py-[5%] lg:py-[5rem] max-md:[3%] w-[100%]">
          <div className="flex flex-col gap-3 items-center md:w-[33%]">
           
           <div className="relative"  onMouseEnter={()=>setBg(true)} 
              onMouseLeave={()=>setBg(false)}>
          <motion.img viewport={{once:true}} initial={{opacity:0}} whileInView={{opacity:1,transition:{type:'spring',delay:0.3,ease:'easeIn',duration:1}}} whileHover={{scale:1.03,transition:{type:'spring',ease:'easeIn', duration:1}}}
              src={require("../assets/newImages/eg1.jpg")}
              alt=""
              className="h-[90%] relative rounded-t-full object-cover w-[100%]"
             
            />
            <div style={{display:bg? 'block' : 'none'}} className="bg-[#e9e6e63f] rounded-t-full transition-all z-20 flex justify-center items-center w-[100%] h-[100%] absolute top-0 left-0">
              <h1 className="flex justify-center items-center mt-[60%]">
              <Link
              to="/engegment/#home"
              className="text-[20px] font-[600] text-[#070706] hover:text-blue-600 transition-all"
              style={{ fontFamily: '"Lora"' }}
            >
                Know more</Link></h1>
            </div>
            </div>
            <h3
              className="text-[14px]  md:mt-[2rem] font-[200] text-[#e6d6c7] uppercase tracking-wider items-center"
              style={{ fontFamily: '"Lora"' }}
            >
              Engagement Photography
            </h3>
            {/* <Link
              to="/engegment/#home"
              className="text-[14px] font-[400] text-[#e6d6c7] hover:text-blue-600 transition-all"
              style={{ fontFamily: '"Lora"' }}
            >
              View More
            </Link> */}
          </div>
          <div className="flex flex-col max-md:flex-col-reverse gap-3 max-md:mt-[2rem] items-center md:w-[33%]">
            {/* <Link
              to="/pre-wedding/#home"
              className="max-md:block md:hidden text-[14px] mb-[2rem] font-[400] text-[#e6d6c7] hover:text-blue-600 transition-all"
              style={{ fontFamily: '"Lora"' }}
            >
              View More
            </Link> */}
            <h3
              className="text-[14px]   font-[200] text-[#e6d6c7] uppercase tracking-wider items-center"
              style={{ fontFamily: '"Lora"' }}
            >
              PRE-WEDDING PHOTOGRAPHY
            </h3>
            {/* <Link
              to="/pre-wedding/#home"
              className="max-md:hidden text-[14px]  mb-[2rem] font-[400] text-[#e6d6c7] hover:text-blue-600 transition-all"
              style={{ fontFamily: '"Lora"' }}
            >
              View More
            </Link> */}
               
           <div className="relative"  onMouseEnter={()=>setPreBg(true)} 
              onMouseLeave={()=>setPreBg(false)}>
            <motion.img viewport={{once:true}} initial={{opacity:0}}
             whileInView={{opacity:1,transition:{type:'spring',ease:'easeIn',duration:1,delay:0.6}}} whileHover={{scale:1.03,transition:{type:'spring',ease:'easeIn', duration:1}}}
              src={require("../assets/newImages/pre-wedd.jpg")}
              alt=""
              className="h-[90%] max-md:rounded-t-full  max-md:w-[100%] object-cover"
            />
              <div style={{display:preBg? 'block' : 'none'}} className="bg-[#e9e6e63f] max-md:rounded-t-full transition-all z-20 flex justify-center items-center w-[100%] h-[100%] absolute top-0 left-0">
              <h1 className="flex justify-center items-center mt-[60%]">
              <Link
              to="/pre-wedding/#home"
              className="text-[20px] font-[600] text-[#070706] hover:text-blue-600 transition-all"
              style={{ fontFamily: '"Lora"' }}
            >
                Know more</Link></h1>
            </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center md:w-[33%]">
          <div className="relative"  onMouseEnter={()=>setWedBg(true)} 
              onMouseLeave={()=>setWedBg(false)}>
          <motion.img viewport={{once:true}} initial={{opacity:0}}
           whileInView={{opacity:1,transition:{type:'spring',ease:'easeIn',duration:1,delay:0.9}}} whileHover={{scale:1.03,transition:{type:'spring',ease:'easeIn', duration:1}}}
              src={require("../assets/w.jpg")}
              alt=""
              className="h-[900%] object-cover rounded-t-full"
            />

<div style={{display:wedBg? 'block' : 'none'}} className="bg-[#e9e6e63f] rounded-t-full transition-all z-20 flex justify-center items-center w-[100%] h-[100%] absolute top-0 left-0">
              <h1 className="flex justify-center items-center mt-[60%]">
              <Link
              to="/wedding/#home"
              className="text-[20px] font-[600] text-[#070706] hover:text-blue-600 transition-all"
              style={{ fontFamily: '"Lora"' }}
            >
                Know more</Link></h1>
            </div>
            </div>
            <h3
              className="text-[14px]  md:mt-[2rem] font-[200] text-[#e6d6c7] uppercase tracking-wider items-center"
              style={{ fontFamily: '"Lora"' }}
            >
              WEDDING PHOTOGRAPHY
            </h3>
            {/* <Link
              to="/wedding/#home"
              className="text-[14px] font-[400] text-[#e6d6c7] hover:text-blue-600 transition-all"
              style={{ fontFamily: '"Lora"' }}
            >
              View More
            </Link> */}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
