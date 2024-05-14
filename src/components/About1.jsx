import { motion } from 'framer-motion'
import React from 'react'
import { FaPlay } from 'react-icons/fa6'

export default function About1() {
  return (
    <div 
    className='w-[100%] relative h-fit flex justify-center overflow-hidden items-center' style={{backgroundImage:"url(../assets/unoptiImages/abt.jpg)"}}>
        <img src={require('../assets/unoptiImages/abt.jpg')} alt=""  className='absolute w-[100%] h-[100%] z-10'/>
      <div className=' relative  z-20   overflow-hidden max-md:px-[2rem] max-w-[1320px] '>
        <motion.div initial={{scale:1}} whileHover={{scale:0.96,transition:{type:'spring',duration:1,ease:'easeIn'}}} className='flex justify-center  items-center  overflow-hidden rounded-t-full'>
            <img src={require('../assets/newImages/about_img.jpg')} alt="" className='object-cover h-[35rem] relative rounded-b-full ' />
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
  )
}
