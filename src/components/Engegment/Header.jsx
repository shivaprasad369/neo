import { motion } from 'framer-motion'
import React from 'react'
import { CiFacebook, CiYoutube } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'

export default function Header() {
  return (
    <motion.div viewport={{once:true}} initial={{y:50}} 
    whileInView={{y:0,transition:{duration:2,type:'spring',ease:'easeIn'}}} 
    className= 'lg:px-[3rem] max-md:px-[2rem] z-40 overflow-hidden justify-center items-center  w-[100vw] bg-[#d9c5a0db] shadow-md'>
      <div className='flex justify-between max-w-[1320px]  md:px-[2rem] py-[1rem] ' >
        <div className='w-[6rem]'>
            <img src={require('../../assets/unoptiImages/NEO-logo.png')} alt="" />
        </div>
        <div className='flex gap-5   ' >
               <a href="https://www.instagram.com/neo_weds/?utm_source=qr&igsh=emlxOHhjZHJpM3kz">

                <FaInstagram width={50} className='hover:text-pink-400 transition-all text-[1.4rem]'/>
               </a>
               <a href="https://youtube.com/@neo_weds?si=DJtusu-U61OdhECi">

                <CiYoutube width={50} className='hover:text-red-500 transition-all text-[1.4rem]'/>
               </a>
               {/* eslint-disable-next-line */}
               <a href="#">

                <CiFacebook width={50} className='hover:text-blue-500 transition-all text-[1.4rem]'/>
               </a>
             </div>
      </div>
    </motion.div>
  )
}
