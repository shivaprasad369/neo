import { motion } from 'framer-motion'
import React from 'react'
import { FaInstagram } from 'react-icons/fa'

export default function Images() {
  return (
    <div className='md:py-[3rem] max-md:py-[1.5rem] flex flex-col gap-3 justify-start items-center md:px-[5%] xl:px-[5%] max-md:px-3 '>
      <a href="https://www.instagram.com/neo_weds/?igsh=MWZycTR0YjN6YmZoag%3D%3D">

      <FaInstagram className='text-4xl cursor-pointer hover:text-pink-600 text-center'/>
      </a>
      <h2
            className="lg:text-[2rem] md:text-[1.5rem]  text-[#785F37] max-md:text-center
             max-md:text-[1.5rem] lg:leading-[2.5rem] tracking-widest  pb-[2rem] "
             style={{ fontFamily: 'Cinzel',fontStyle:'normal' }}
          >
           Follow me on instagram
          </h2>
      <div  className='grid md:grid-cols-6 max-md:grid-cols-3  
      max-w-[1320px] gap-2 md:h-[10rem] 
              object-cover box-content'>
        <motion.div 
        viewport={{once:true}} initial={{scale:0}} whileInView={{scale:1,transition:{type:'spring',ease:'easeIn',duration:1,delay:0.3}}}
         className=' border-3 border-black'>
          <a href="https://www.instagram.com/neo_weds/?igsh=MWZycTR0YjN6YmZoag%3D%3D">

        <img src={require('../assets/newImages/pic-1.jpg')} alt="" className='max-md:h-[130px] h-[100%] w-[100%] object-cover' />
          </a>
        </motion.div>
        <a href="https://www.instagram.com/neo_weds/?igsh=MWZycTR0YjN6YmZoag%3D%3D">
            
        <motion.img 
        viewport={{once:true}} initial={{scale:0}} whileInView={{scale:1,transition:{type:'spring',ease:'easeIn',duration:1,delay:0.5}}}
        src={require('../assets/newImages/pic-2.jpg')} alt=""  className='object-cover h-[100%] w-[100%]  max-md:h-[130px] '/>
            </a>
            <a href="https://www.instagram.com/neo_weds/?igsh=MWZycTR0YjN6YmZoag%3D%3D">
            
        <motion.img
        viewport={{once:true}} initial={{scale:0}} whileInView={{scale:1,transition:{type:'spring',ease:'easeIn',duration:1,delay:0.7}}}
        src={require('../assets/newImages/pic-3.jpg')} alt="" className='object-cover h-[100%] w-[100%]  max-md:h-[130px] '/>
            </a>

            <a href="https://www.instagram.com/neo_weds/?igsh=MWZycTR0YjN6YmZoag%3D%3D">
            
            <motion.img
            viewport={{once:true}} initial={{scale:0}} whileInView={{scale:1,transition:{type:'spring',ease:'easeIn',duration:1,delay:0.9}}}
            src={require('../assets/newImages/pic-4.jpg')} alt="" className='object-cover h-[100%] w-[100%]  max-md:h-[130px] '/>
            </a>

            <a href="https://www.instagram.com/neo_weds/?igsh=MWZycTR0YjN6YmZoag%3D%3D">
            
        <motion.img
        viewport={{once:true}} initial={{scale:0}} whileInView={{scale:1,transition:{type:'spring',ease:'easeIn',duration:1,delay:1.1}}}
        src={require('../assets/newImages/pic-5.jpg')} alt="" className='object-cover h-[100%] w-[100%]  max-md:h-[130px] ' />
            </a>

            <a href="https://www.instagram.com/neo_weds/?igsh=MWZycTR0YjN6YmZoag%3D%3D">
            
        <motion.img
        viewport={{once:true}} initial={{scale:0}} whileInView={{scale:1,transition:{type:'spring',ease:'easeIn',duration:1,delay:1.3}}}
        src={require('../assets/newImages/p1.jpg')} alt="" className='object-cover h-[100%] w-[100%]  max-md:h-[130px] '/>
            </a>
      </div>
    </div>
  )
}
