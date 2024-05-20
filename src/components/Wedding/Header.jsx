import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react';
import { CiFacebook, CiYoutube } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'

export default function Header() {
  const [stick, setStick] = useState();
  
  window.onscroll = function () {
    myFunction();
  };
  // var header=document.getElementsByClassName('nav');
  // var sticky=header.offsetTop;
  function myFunction() {
    if (window.scrollY > 40) {
      setStick(true);
      console.log(stick);
    } else {
      setStick(false);
    }

    console.log(window.scrollY);
  }
  return (
    <motion.div 
    viewport={{once:true}} initial={{y:50}} whileInView={{y:0,transition:{duration:2,type:'spring',ease:'easeIn'}}} 
    className={`nav lg:px-[7rem] max-md:px-[0.5rem] z-40 overflow-hidden fixed w-[100vw] ${!stick ? 'bg-[#e0dfdb8f] text-[#111]' : 'bg-transparent text-white'} shadow-md`}>
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
               {/* <a href="#"> */}

                <CiFacebook width={50} className='hover:text-blue-500 transition-all text-[1.4rem]'/>
               {/* </a> */}
             </div>
      </div>
    </motion.div>
  )
}
