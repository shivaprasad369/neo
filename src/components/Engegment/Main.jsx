import { motion } from "framer-motion";
import React from "react";

export default function Main() {
  return (
    <div className="pt-[60px]overflow-x-hidden flex w-full h-full justify-center md:px-[10%] mb-[7rem] items-center box-border">
      <div className="flex w-[100%] max-w-[1320px] justify-center items-center">
        <div>
          <motion.div initial={{y:100}} whileInView={{y:0,transition:{type:'spring',duration:1.5,ease:'easeIn'}}} className="" style={{ fontFamily: "Antic Didone" }}>
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

          <div className=" mt-[5rem]  flex flex-col md:gap-[12rem] max-md:gap-[7rem] justify-center items-center w-[100%]">
            <div className="md:flex max-md:flex-col max-md:pb-[2rem]  bg-[#292929] gap-6 md:px-[2rem] 
            lg:h-[27rem] max-lg:h-[100%] max-lg:py-[2rem] md:justify-between w-[100%]
            
            max-md:justify-center items-center  max-md:px-[2rem] lg:px-[3rem] relative">
            
              <div className="max-sm:absolute max-sm:w-[90%] max-sm:left-[5%] max-sm:top-[-3rem]
              md:w-[43%] max-md:w-[70%] justify-center items-center  max-md:pb-[2rem] max-sm:ml-0 max-md:ml-[15%] ">
                <motion.img
                whileHover={{scale:1.03,transition:{type:'spring',duration:1,ease:'easeIn'}}}
                  src={require("../../assets/unoptiImages/eg1.jpg")}
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
                  FOR THE COUPLE WHO WANTS IT ALL FOR THEIR LOVE
                </h2>
                <p style={{ fontFamily: "Lora" }}>
                  Rings exchanged, hearts intertwined, a promise spoken. Loved
                  ones gather, celebrating the start of forever. Joyous
                  embraces, laughter, and love fill this cherished engagement
                  ceremony, marking new beginnings.
                </p>
              </motion.div>
            </div>
            <div className="md:flex md:flex-row-reverse  max-md:pb-[2rem]  bg-[#292929] gap-6 md:px-[2rem] 
            lg:h-[27rem] max-lg:h-[100%] max-lg:py-[2rem] md:justify-between w-[100%]
            lg:px-[3rem] 
            max-md:justify-center items-center  max-md:px-[2rem] relative">
            
            <div className="max-sm:absolute max-sm:w-[90%] max-sm:left-[5%] max-sm:top-[-3rem]
              md:w-[40%] max-md:w-[70%] justify-center items-center  max-md:pb-[2rem] max-sm:ml-0 max-md:ml-[15%] ">
               <motion.img
                whileHover={{scale:1.03,transition:{type:'spring',duration:1,ease:'easeIn'}}}
                  className="object-cover rounded-t-full top-[3rem] max-sm:w-[100%] max-sm:h-[31rem]
                   rounded-b-full justify-center items-center"
                  src={require("../../assets/unoptiImages/eg15.jpg")}
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
                  TWO HEARTS, ONE LOVE, ENDLESS STORY.
                </h2>
                <p style={{ fontFamily: "Lora" }}>
                  Promise of Forever: The day is centered around the promise of
                  eternal love and commitment between the couple. It marks the
                  official beginning of their journey towards marriage. The
                  exchange of engagement rings symbolizes a pledge of love and
                  loyalty.
                </p>
              </motion.div>
            </div>

            <div className="md:flex max-md:flex-col max-md:pb-[2rem]  bg-[#292929] gap-6 md:px-[2rem] 
            lg:h-[27rem] max-lg:h-[100%] max-lg:py-[2rem] md:justify-between w-[100%]
            lg:px-[3rem] 
            max-md:justify-center items-center  max-md:px-[2rem] relative">
            
            <div className="max-sm:absolute max-sm:w-[90%] max-sm:left-[5%] max-sm:top-[-3rem]
              md:w-[40%] max-md:w-[70%] justify-center items-center  max-md:pb-[2rem] max-sm:ml-0 max-md:ml-[15%] ">
                <motion.img
                whileHover={{scale:1.03,transition:{type:'spring',duration:1,ease:'easeIn'}}}
                  className="object-cover rounded-t-full top-[3rem] max-sm:w-[100%] max-sm:h-[31rem]
                  rounded-b-full justify-center items-center"
                  src={require("../../assets/newImages/eg1.jpg")}
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
                  TOGETHER, WE REWRITE DESTINY'S TALE
                </h2>
                <p style={{ fontFamily: "Lora" }}>
                  Family Bonding Families and friends gather to celebrate this
                  special occasion. It's a time for both families to come
                  together, bond, and share in the joy of the couple's
                  commitment. The atmosphere is filled with joy, laughter, and
                  often, cultural traditions.
                </p>
              </motion.div>
            </div>

            <div className="md:flex md:flex-row-reverse max-md:flex-col  max-md:pb-[2rem]  bg-[#292929] gap-6 md:px-[2rem] 
            lg:h-[27rem] max-lg:h-[100%] max-lg:py-[2rem] md:justify-between w-[100%]
            lg:px-[3rem] 
            max-md:justify-center items-center  max-md:px-[2rem] relative">
            
            <div className="max-sm:absolute max-sm:w-[90%] max-sm:left-[5%] max-sm:top-[-3rem]
              md:w-[40%] max-md:w-[70%] justify-center items-center  max-md:pb-[2rem] max-sm:ml-0 max-md:ml-[15%] ">
                  <motion.img
                whileHover={{scale:1.03,transition:{type:'spring',duration:1,ease:'easeIn'}}}
                  className="object-cover rounded-t-full top-[3rem] max-sm:w-[100%] max-sm:h-[31rem]
                  rounded-b-full justify-center items-center"
                  src={require("../../assets/newImages/NEO09073 2.jpg")}
                  alt=""
                />
              </div>
              <motion.div
              viewport={{once:true}}
              initial={{x:-100}}
                whileInView={{x:0,transition:{type:'spring',duration:1,ease:'easeIn'}}}
              className="flex flex-col max-sm:pt-[29rem] px-[10px]  max-md:text-center gap-3 md:w-[55%]
               text-[#ece8e2] tracking-wider">

                <h2
                  className="text-[1.6rem] font-[400] max-md:text-center mb-[1rem]"
                  style={{ fontFamily: "Antic Didone" }}
                >
                  LOVE: THE MASTERPIECE OF OUR SOULS.
                </h2>
                <p style={{ fontFamily: "Lora" }}>
                  Photo keepsakes play a significant role in engagements by
                  preserving the special moments and emotions experienced during
                  this milestone event. Photos capture the essence of the
                  engagement day—the excitement, joy, and love shared by the
                  couple and their loved ones.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
