import { motion } from "framer-motion";
import React from "react";
import { FaPlay } from "react-icons/fa6";
// import { useLocation } from "react-router-dom";

export default function Intro() {
  return (
    <div
      id="about"
      className="bg-[#ece8e2]  h-full overflow-hidden flex box-content max-md:px-[5%] md:px-[5%] lg:px-[10%] xl:px-[10%] pt-[3rem] pb-[3rem]"
    >
      <div className="relative md:flex max-md:flex-col justify-center items-center lg:gap-16 md:gap-10 max-md:gap-10 w-[100%]">
        <motion.div
          viewport={{ once: true }}
          initial={{ x: -200 }}
          whileInView={{
            x: 0,
            transition: { type: "spring", ease: "easeIn", duration: 1.5 },
          }}
          className="flex relative md:w-[60%] lg:w-[66%] h-fit justify-items-center max-md:mt-3 "
        >
          <motion.div
            whileHover={{
              scale: 1.03,
              transition: { ease: "easeInOut", type: "spring", duration: 1 },
            }}
          >
            <img
              src={require("../assets/s2.jpg")}
              alt=""
              className="shadow-[#636161] rotate-[-4deg] object-cover shadow-lg "
            />
          </motion.div>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ x: 200 }}
          whileInView={{
            x: 0,
            transition: { type: "spring", ease: "easeIn", duration: 1.5 },
          }}
          className="flex flex-col  gap-5 md:w-[37%]"
        >
          <h1
            style={{ fontFamily: '"Taken by Vultures Demo",Sans-serif' }}
            className=" w-ful text-[#e97973] pb-[-5rem] font-normal tracking-wider lg:ml-[-20rem] md:ml-[-5rem] max-md:ml-[-7rem] max-md:mt-[-2rem] mb-[-2rem] text-center left-[55%] h-full top-[2rem] -z-0 text-[4rem] capitalize "
          >
            Vikas Miskin
          </h1>
          <h2
            className="lg:text-[2rem] md:text-[1.5rem]  text-[#292929] max-md:text-center
             max-md:text-[1.5rem] lg:leading-[2.5rem] tracking-wider uppercase"
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
