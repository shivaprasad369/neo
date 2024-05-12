import { motion } from "framer-motion";
import React from "react";

export default function Main() {
  return (
    <div className="pt-[60px] flex w-full h-full justify-center md:px-[10%] mb-[7rem] items-center box-border">
      <div className="flex w-[100%] max-w-[1320px] justify-center items-center">
        <div>
          <motion.div viewport={{once:true}} initial={{y:100}} whileInView={{y:0,transition:{type:'spring',duration:1.5,ease:'easeIn'}}} className="" style={{ fontFamily: "Antic Didone" }}>
            <h2 className="md:text-[49px] max-md:text-[2rem] font-[400] text-[#292929] text-center">
              LET ME CAPTURE YOUR LOVE
            </h2>
            <p
              className="text-[#292929] text-[15px] font-[400] text-center"
              style={{ fontFamily: "Lora" }}
            >
              IN THE MOST DESIRABLE WAY FOR YOU
            </p>
          </motion.div>

          <div className=" mt-[5rem]  flex flex-col  md:gap-[12rem] max-md:gap-[7rem] justify-center items-center w-[100%]">
            <div
              className="md:flex max-md:flex-col max-md:pb-[2rem]  bg-[#292929] gap-6 md:px-[2rem] 
            lg:h-[27rem] max-lg:h-[100%] max-lg:py-[2rem] md:justify-between w-[100%]
            lg:px-[3rem]
            max-md:justify-center items-center  max-md:px-[2rem] relative"
            >
              <div
                className="max-sm:absolute max-sm:w-[90%] max-sm:left-[5%] max-sm:top-[-3rem]
              md:w-[40%] max-md:w-[70%] justify-center items-center  max-md:pb-[2rem] max-sm:ml-0 max-md:ml-[15%] "
              >
                <motion.img
                whileHover={{scale:1.03,transition:{type:'spring',duration:1,ease:'easeIn'}}}
                  src={require("./images/wedding1.jpg")}
                  className="object-cover rounded-t-full top-[3rem] max-sm:w-[100%] max-sm:h-[31rem]
                  rounded-b-full justify-center items-center"
                  alt=""
                />
              </div>
              <motion.div
              viewport={{once:true}}
              initial={{x:100}}
                whileInView={{x:0,transition:{type:'spring',duration:1,ease:'easeIn'}}}
              className="flex flex-col max-sm:pt-[29rem] px-[10px]  max-md:text-center gap-3 md:w-[55%] text-[#ece8e2] tracking-wider">
                <h2
                  className="text-[1.6rem] font-[400] max-md:text-center mb-[1rem]"
                  style={{ fontFamily: "Antic Didone" }}
                >
                  FREEZING TIME, EMBRACING MOMENTS.
                </h2>
                <p style={{ fontFamily: "Lora" }}>
                  Today isn’t just about rings and vows; it's about the fusion
                  of two souls, promising to walk hand in hand through life’s
                  myriad of experiences. It's a day where laughter dances with
                  tears, and every heartbeat echoes the rhythm of eternal love.
                </p>
              </motion.div>
            </div>

            <div
              className="md:flex md:flex-row-reverse  max-md:pb-[2rem]  bg-[#292929] gap-6 md:px-[2rem] 
            lg:h-[27rem] max-lg:h-[100%] max-lg:py-[2rem] md:justify-between w-[100%]
            lg:px-[3rem]
            max-md:justify-center items-center  max-md:px-[2rem] relative"
            >
              <div
                className="max-sm:absolute max-sm:w-[90%] max-sm:left-[5%] max-sm:top-[-3rem]
              md:w-[43%]   max-md:w-[70%] justify-center items-center  max-md:pb-[2rem] max-sm:ml-0 max-md:ml-[15%] "
              >
                 <motion.img
                whileHover={{scale:1.03,transition:{type:'spring',duration:1,ease:'easeIn'}}}
                  className="object-cover rounded-t-full top-[3rem] max-sm:w-[100%] max-sm:h-[31rem]
                   rounded-b-full justify-center items-center"
                  src={require("./images/wedding2 - Copy.jpg")}
                  alt=""
                />
              </div>
              <motion.div
              viewport={{once:true}}
              initial={{x:-100}}
                whileInView={{x:0,transition:{type:'spring',duration:1,ease:'easeIn'}}}
              className="flex flex-col max-sm:pt-[29rem] px-[10px]  max-md:text-center gap-3 md:w-[55%] text-[#ece8e2] tracking-wider">
                <h2
                  className="text-[1.6rem] font-[400] max-md:text-center mb-[1rem]"
                  style={{ fontFamily: "Antic Didone" }}
                >
                  MOMENTS PRESERVED, MEMORIES TREASURED.
                </h2>
                <p style={{ fontFamily: "Lora" }}>
                  Amidst the joyous chaos and serene moments, remember that this
                  celebration isn’t just about the venue or the decorations;
                  it's about the promises whispered, the dreams envisioned, and
                  the vows spoken from the depths of your hearts..
                </p>
              </motion.div>
            </div>

            <div
              className="md:flex max-md:flex-col max-md:pb-[2rem]  bg-[#292929] gap-6 md:px-[2rem] 
            lg:h-[27rem] max-lg:h-[100%] max-lg:py-[2rem] md:justify-between w-[100%]
            lg:px-[3rem]
            max-md:justify-center items-center  max-md:px-[2rem] relative"
            >
              <div
                className="max-sm:absolute max-sm:w-[90%] max-sm:left-[5%] max-sm:top-[-3rem]
              md:w-[40%] max-md:w-[70%] justify-center items-center  max-md:pb-[2rem] max-sm:ml-0 max-md:ml-[15%] "
              >
                 <motion.img
                whileHover={{scale:1.03,transition:{type:'spring',duration:1,ease:'easeIn'}}}
                  className="object-cover rounded-t-full top-[3rem] max-sm:w-[100%] max-sm:h-[31rem]
                  rounded-b-full justify-center items-center"
                  src={require("./images/wedding3 - Copy.jpg")}
                  alt=""
                />
              </div>
              <motion.div viewport={{once:true}}
              initial={{x:100}}
                whileInView={{x:0,transition:{type:'spring',duration:1,ease:'easeIn'}}} className="flex flex-col max-sm:pt-[29rem] px-[10px]  max-md:text-center gap-3 md:w-[55%] text-[#ece8e2] tracking-wider">
                <h2
                  className="text-[1.6rem] font-[400] max-md:text-center mb-[1rem]"
                  style={{ fontFamily: "Antic Didone" }}
                >
                  PAINTING WITH LIGHT, SEIZING MOMENTS
                </h2>
                <p style={{ fontFamily: "Lora" }}>
                  Let your eyes meet across the room, weaving tales of love and
                  anticipation. Embrace the tears of happiness, knowing they
                  signify the start of an incredible adventure.
                </p>
              </motion.div>
            </div>

            <div
              className="md:flex max-md:flex-col md:flex-row-reverse  max-md:pb-[2rem]  bg-[#292929] gap-6 md:px-[2rem] 
            lg:h-[27rem] max-lg:h-[100%] max-lg:py-[2rem] md:justify-between w-[100%]
            lg:px-[3rem]
            max-md:justify-center items-center  max-md:px-[2rem] relative"
            >
              <div
                className="max-sm:absolute max-sm:w-[90%] max-sm:left-[5%] max-sm:top-[-3rem]
              md:w-[40%] max-md:w-[70%] justify-center items-center  max-md:pb-[2rem] max-sm:ml-0 max-md:ml-[15%] "
              >
                 <motion.img
                whileHover={{scale:1.03,transition:{type:'spring',duration:1,ease:'easeIn'}}}
                  className="object-cover rounded-t-full top-[3rem] max-sm:w-[100%] max-sm:h-[31rem]
                  rounded-b-full justify-center items-center"
                  src={require("./images/wedding6 - Copy.jpg")}
                  alt=""
                />
              </div>
              <motion.div
              viewport={{once:true}}
              initial={{x:-100}}
                whileInView={{x:0,transition:{type:'spring',duration:1,ease:'easeIn'}}}
                className="flex flex-col max-sm:pt-[29rem] px-[10px]  max-md:text-center gap-3 md:w-[55%]
               text-[#ece8e2] tracking-wider"
              >
                <h2
                  className="text-[1.6rem] font-[400] max-md:text-center mb-[1rem]"
                  style={{ fontFamily: "Antic Didone" }}
                >
                  CREATING TIMELESS PORTRAITS, CAPTURING TIMELESS MOMENT
                </h2>
                <p style={{ fontFamily: "Lora" }}>
                  So, cherish every smile, hold onto each fleeting moment, for
                  today is the beginning of a life where love reigns supreme.
                  May your love continue to grow, may your laughter blend
                  harmoniously, echoing through the years to come.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
