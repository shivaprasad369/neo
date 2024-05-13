import { motion } from "framer-motion";
import React from "react";

export default function Main() {
  return (
    <div className="pt-[60px] flex w-full h-full justify-center md:px-[10%] mb-[7rem] items-center box-border">
      <div className="flex w-[100%] max-w-[1320px] justify-center items-center">
        <div>
          <motion.div
            initial={{ y: 100 }}
            viewport={{ once: true }}
            whileInView={{
              y: 0,
              transition: { type: "spring", duration: 1.5, ease: "easeIn" },
            }}
            className=""
            style={{ fontFamily: "Antic Didone" }}
          >
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
                  whileHover={{
                    scale: 1.03,
                    transition: { type: "spring", duration: 1, ease: "easeIn" },
                  }}
                  src={require("../../assets/unoptiImages/pw1.jpg")}
                  className="object-cover rounded-t-full top-[3rem] max-sm:w-[100%] max-sm:h-[31rem]
                  rounded-b-full justify-center items-center"
                  alt=""
                />
              </div>
              <motion.div
                viewport={{ once: true }}
                initial={{ x: 100 }}
                whileInView={{
                  x: 0,
                  transition: { type: "spring", duration: 1, ease: "easeIn" },
                }}
                className="flex flex-col max-sm:pt-[29rem] px-[10px]  max-md:text-center gap-3 md:w-[55%] text-[#ece8e2] tracking-wider"
              >
                <h2
                  className="text-[1.6rem] font-[400] max-md:text-center mb-[1rem]"
                  style={{ fontFamily: "Antic Didone" }}
                >
                  CAPTURING MOMENTS, CREATING MEMORIES
                </h2>
                <p style={{ fontFamily: "Lora" }}>
                  Celebrating our love story, one frame at a time. Preparing for
                  forever, cherishing every moment before our 'I do'..
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
                  whileHover={{
                    scale: 1.03,
                    transition: { type: "spring", duration: 1, ease: "easeIn" },
                  }}
                  className="object-cover rounded-t-full top-[3rem] max-sm:w-[100%] max-sm:h-[31rem]
                   rounded-b-full justify-center items-center"
                  src={require("../../assets/pw.jpg")}
                  alt=""
                />
              </div>
              <motion.div
                viewport={{ once: true }}
                initial={{ x: -100 }}
                whileInView={{
                  x: 0,
                  transition: { type: "spring", duration: 1, ease: "easeIn" },
                }}
                className="flex flex-col max-sm:pt-[29rem] px-[10px]  max-md:text-center gap-3 md:w-[55%] text-[#ece8e2] tracking-wider"
              >
                <h2
                  className="text-[1.6rem] font-[400] max-md:text-center mb-[1rem]"
                  style={{ fontFamily: "Antic Didone" }}
                >
                  EMBRACING BEAUTY THROUGH THE LENS
                </h2>
                <p style={{ fontFamily: "Lora" }}>
                  Capturing our laughter, dreams, and promises—painting our
                  prelude to forever in the colours of love.
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
                  whileHover={{
                    scale: 1.03,
                    transition: { type: "spring", duration: 1, ease: "easeIn" },
                  }}
                  className="object-cover rounded-t-full top-[3rem] max-sm:w-[100%] max-sm:h-[31rem]
                  rounded-b-full justify-center items-center"
                  src={require("../../assets/pw2.jpg")}
                  alt=""
                />
              </div>
              <motion.div
                viewport={{ once: true }}
                initial={{ x: 100 }}
                whileInView={{
                  x: 0,
                  transition: { type: "spring", duration: 1, ease: "easeIn" },
                }}
                className="flex flex-col max-sm:pt-[29rem] px-[10px]  max-md:text-center gap-3 md:w-[55%] text-[#ece8e2] tracking-wider"
              >
                <h2
                  className="text-[1.6rem] font-[400] max-md:text-center mb-[1rem]"
                  style={{ fontFamily: "Antic Didone" }}
                >
                  YOUR STORY, OUR LENS
                </h2>
                <p style={{ fontFamily: "Lora" }}>
                  From stolen glances to intertwined hearts—our pre-wedding
                  symphony of love, scripted in the whispers of anticipation,
                  forever frozen in these frames.
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
                  whileHover={{
                    scale: 1.03,
                    transition: { type: "spring", duration: 1, ease: "easeIn" },
                  }}
                  className="object-cover rounded-t-full top-[3rem] max-sm:w-[100%] max-sm:h-[31rem]
                  rounded-b-full justify-center items-center"
                  src={require("../../assets/unoptiImages/pre1 (2).jpg")}
                  alt=""
                />
              </div>
              <motion.div
                viewport={{ once: true }}
                initial={{ x: -100 }}
                whileInView={{
                  x: 0,
                  transition: { type: "spring", duration: 1, ease: "easeIn" },
                }}
                className="flex flex-col max-sm:pt-[29rem] px-[10px]  max-md:text-center gap-3 md:w-[55%]
               text-[#ece8e2] tracking-wider"
              >
                <h2
                  className="text-[1.6rem] font-[400] max-md:text-center mb-[1rem]"
                  style={{ fontFamily: "Antic Didone" }}
                >
                  FRAMING LIFE'S STORIES, ONE CLICK AT A TIME
                </h2>
                <p style={{ fontFamily: "Lora" }}>
                  In the spotlight of love, dancing through our pre-wedding
                  tale. Each click etches our story, a beautiful prelude to our
                  lifelong journey.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
