import { motion } from 'framer-motion'
import React from 'react'

export default function About1() {
  return (
    <div 
    className='w-[100%] relative h-fit flex justify-center overflow-hidden items-center' style={{backgroundImage:"url(../assets/unoptiImages/abt.jpg)"}}>
        <img src={require('../assets/unoptiImages/abt.jpg')} alt=""  className='absolute w-[100%] h-[100%] z-10'/>
      <div className=' relative  z-20  h-[rem] overflow-hidden max-md:px-[2rem] max-w-[1320px] '>
        <motion.div initial={{scale:1}} whileHover={{scale:0.96,transition:{type:'spring',duration:1,ease:'easeIn'}}} className='flex justify-center  items-center  overflow-hidden rounded-t-full'>
            <img src={require('../assets/unoptiImages/22.png')} alt="" className='object-cover rounded-b-full' />
        </motion.div>
      </div>
    </div>
  )
}
