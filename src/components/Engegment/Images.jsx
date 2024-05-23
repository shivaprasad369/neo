import { motion } from 'framer-motion'
import React from 'react'

export default function Images() {
  return (
    <div className='md:py-[3rem] max-md:py-[1.5rem] md:px-[5%] xl:px-[15%] max-md:px-3  '>
      <div  className='grid md:grid-cols-6 max-md:grid-cols-3  
      max-w-[1320px] gap-2 md:h-[10rem]  object-cover box-content overflow-hidden'>
        <motion.div 
        viewport={{once:true}} initial={{scale:0}} whileInView={{scale:1,transition:{type:'spring',ease:'easeIn',duration:1,delay:0.3}}}
         className=' border-3 border-black'>

        <img src={require('../../assets/unoptiImages/eg18.jpg')} alt="" className='max-md:h-[130px] h-[100%] w-[100%] object-cover' />
        </motion.div>
        <motion.img 
        viewport={{once:true}} initial={{scale:0}} whileInView={{scale:1,transition:{type:'spring',ease:'easeIn',duration:1,delay:0.5}}}
        src={require('../../assets/unoptiImages/eg7.jpg')} alt=""  className='object-cover h-[100%] w-[100%] max-md:h-[130px] '/>
        <motion.img
        viewport={{once:true}} initial={{scale:0}} whileInView={{scale:1,transition:{type:'spring',ease:'easeIn',duration:1,delay:0.7}}}
        src={require('../../assets/unoptiImages/eg8.jpg')} alt="" className='object-cover h-[100%] w-[100%] max-md:h-[130px] '/>
        <motion.img
        viewport={{once:true}} initial={{scale:0}} whileInView={{scale:1,transition:{type:'spring',ease:'easeIn',duration:1,delay:0.9}}}
        src={require('../../assets/unoptiImages/eg3.jpg')} alt="" className='object-cover h-[100%] max-md:h-[130px] w-[100%] '/>
        <motion.img
        viewport={{once:true}} initial={{scale:0}} whileInView={{scale:1,transition:{type:'spring',ease:'easeIn',duration:1,delay:1.1}}}
        src={require('../../assets/unoptiImages/eg4.jpg')} alt="" className='object-cover h-[100%] max-md:h-[130px] w-[100%]' />
        <motion.img
        viewport={{once:true}} initial={{scale:0}} whileInView={{scale:1,transition:{type:'spring',ease:'easeIn',duration:1,delay:1.3}}}
        src={require('../../assets/unoptiImages/eg14.jpg')} alt="" className='object-cover h-[100%] max-md:h-[130px] w-[100%]'/>
      </div>
    </div>
  )
}
