import { motion } from "framer-motion";
import React from "react";
// Import Swiper styles

export default function NewAbout() {
  return (
    <div className=" overflow-hidden justify-center md:pb-[2rem] items-center max-md:pt-[2rem] md:pt-[5rem] flex">
      <motion.div viewport={{once:true}} initial={{y:200}} whileInView={{y:0,transition:{ease:'easeInOut',type:'spring',duration:2}}}
       className="flex flex-col justify-center items-center md:mx-[7%]">
        <div className="justify-center items-center gap-2 flex flex-col xl:mx-[17%] md:mx-[5%] max-md:mx-[3%]">
          <motion.h2 viewport={{once:true}}  initial={{scale:0.8}} whileInView={{scale:1,transition:{ease:'easeInOut',type:'spring',duration:1,delay:0.3}}}
              style={{ fontFamily: 'Cinzel',fontStyle:'normal' }}
            className="lg:text-[2.5rem] md:text-[2rem] sm:text-[1.5rem] font-[500] text-[#785F37] md:text-center tracking-wide max-md:text-[1.7rem] max-md:text-center"
          >
             Neo Weds 
          </motion.h2>
          <motion.h3 viewport={{once:true}}  initial={{scale:0.8}} whileInView={{scale:1,transition:{ease:'easeInOut',type:'spring',duration:1,delay:0.6}}}
            style={{ fontFamily: '"Lora"' }}
            className="text-[#292929] text-[15px] tracking-widest"
          >
            THAT TELLS STORIES
          </motion.h3>
          <div>
            <p
              style={{ fontFamily: '"Lora"' }}
              className="text-[#292929] font-[400] text-[13px] px-[1%]  leading-6 tracking-wider max-md:mt-[1.5rem] md:mt-[2.5rem]  text-justify"
            >
              Once upon a time, in India's lively world, a lovely couple met.
              They enjoyed music by the river, celebrated colourful festivals,
              and explored history together. His music and Her art intertwine,
              echoing the nation's heritage. Amidst bustling streets and serene
              landscapes, their love blooms with his melodies and her art, they
              found love in bustling cities and quiet villages. Their story is a
              colourful blend of tradition and today, filled with music, art,
              and endless love.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
