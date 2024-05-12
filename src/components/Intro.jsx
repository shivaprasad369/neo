import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { FaPlay } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

export default function Intro() {
  const location = useLocation();

  useEffect(() => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <div id="about" className="bg-[#ece8e2]  h-full overflow-hidden flex box-content max-md:px-[5%] md:px-[5%] lg:px-[10%] xl:px-[19%] pt-[5rem] pb-[3rem]">
      <div className="md:flex max-md:flex-col justify-center items-center lg:gap-16 md:gap-10 max-md:gap-10 w-[100%]">
        <motion.div viewport={{once:true}}  initial={{x:-200}} 
        whileInView={{x:0,transition:{type:'spring',ease:'easeIn',duration:1.5}}}
         className="flex flex-col gap-5 md:w-[51%]">
          <h2
            className="lg:text-[2.3rem] md:text-[1.5rem] text-[#292929] max-md:text-center
             max-md:text-[1.5rem] lg:leading-[2.7rem] tracking-wider uppercase"
            style={{ fontFamily: '"Antic Didone"' }}
          >
            Celebrating Eternal Love: A Glance Into The Perfect Wedding Moment
          </h2>
          {/* <h3
            className="text-[15px] text-[#292929] font-[400]"
            style={{ fontFamily: '"Lora"' }}
          >
            I AM VIKAS MISKIN, YOUR PHOTOGRAPHER,
          </h3> */}
          <p className="text-[15px] font-[400] tracking-wider text-justify leading-7 text-[#444444]" style={{fontFamily:'"Lora"'}}>
            {" "}
            I have been in the business for almost seven years. The NEOWEDS crew
            which is team of 83 well professional photographers has photographed
            over 800 weddings and over 300 engagement photos for different
            couples from throughout the nation. We are pleased to announce that
            we have expanded our work by finishing more than 100 fashion shoots.
            Our team has also handled some well-known brand shoots including
            Shreelaxmida's jewelry and jack and jones also worked with many
            celebrities
          </p>
        </motion.div>
        <motion.div viewport={{once:true}} initial={{x:200}} whileInView={{x:0,transition:{type:'spring',ease:'easeIn',duration:1.5}}}
        className="flex relative md:w-[50%] h-fit justify-items-center max-md:mt-3 ">
            <motion.div whileHover={{scale:1.03,transition:{ease:'easeInOut',type:'spring',duration:1}}}>
                <img src={require('../assets/newImages/about_img.jpg')} alt=""  className="shadow-[#636161] object-cover shadow-lg "/>
            </motion.div>
            <div className="video-main" style={{
                    position: 'absolute',
                    left:'56%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}>
                  <div className="promo-video">
                    <div className="waves-block">
                      <div className="waves wave-1"></div>
                      <div className="waves wave-2"></div>
                      <div className="waves wave-3"></div>
                    </div>
                  </div>
                <a
                     className="" href="https://youtu.be/XOO26Xgnd98">
                    </a> 
                </div>
                <a href="https://youtu.be/XOO26Xgnd98" className="absolute left-[42.7%] top-[42.3%] border-[0px] p-5 bg-black rounded-full">

                    <FaPlay className=" text-white text-md"/>
                </a>
        </motion.div>
      </div>
    </div>
  );
}
