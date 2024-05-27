import React, { useState } from "react";
import logo from "../assets/NEO-logo.png";
import { motion } from "framer-motion";

import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
// import { Link } from "react-router-dom";
export default function Header() {
  const [stick, setStick] = useState();
  const [menu, setMenu] = useState(false);
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
    <>
      <motion.div
        initial={{ y: 50 }}
        whileInView={{
          y: 0,
          transition: { type: "spring", ease: "easeIn", duration: 0.4 },
        }}
        className={`nav  z-40 overflow-hidden fixed w-[100vw] bg-[#d7d6dc] shadow-md`}
      >
        <div className="xl:px-[10%] relative  lg:px-[2.5rem] px-[2.5rem] max-[950px]:px-[1rem] items-center w-[100%]  py-[1.1rem]  transition-all">
          <div className="h-full text-center flex  min-[950px]:gap-[30%]  justify-center items-center font-[500]">
            <div
              className="flex gap-3 max-[950px]:hidden  "
              //  style={{zIndex:3,position:stick ? 'fixed' : "sticky",transition:stick && '0.5s easeInOut'}}
            >
              <ul className="flex gap-8  xl:text-[18px] max-xl:text-[15px] tracking-widest leading-6 font-lightbold" style={{fontFamily:'"Cinzel", serif'}}>
                <il className="hover:text-[#785F37] transition-all cursor-pointer">
                  <a href="/#home" style={{fontFamily:"Cinzel"}}>Home</a>
                </il>
                <il className="hover:text-[#785F37] transition-all  cursor-pointer">
                  <a href="/#about" style={{fontFamily:"Cinzel"}}>About </a>
                </il><il className="hover:text-[#785F37] transition-all  cursor-pointer">
                  <a href="/#gallery" style={{fontFamily:"Cinzel"}}>Gallery </a>
                </il>
                <il className="hover:text-[#785F37] transition-all  cursor-pointer">
                <a href="/#services" style={{fontFamily:"Cinzel"}}>Services</a>
                  
                </il>
              </ul>
            </div>
            <div className="min-[950px]:absolute max-[950px]:relative max-[950px]:w-full min-[950px]:h-full flex min-[950px]:justify-center min-[950px]:items-center ">
              <img
                src={logo}
                alt=""
                className="md:h-[2.5rem] max-md:h-[2.1rem] object-cover w-[] flex justify-center  md:w-[8rem] max-[950px]:w-[6rem] items-center "
              />
            </div>
            <div
              className="flex gap-3  max-[950px]:hidden "
              //  style={{zIndex:3,position:stick ? 'fixed' : "sticky",transition:stick && '0.5s easeInOut'}}
            >
              <ul className="flex gap-7  xl:text-[18px] max-xl:text-[15px] tracking-widest leading-6 font-lightbold">
                <il className="hover:text-[#785F37]  transition-all cursor-pointer">
                  <a href="/#testimonial" style={{fontFamily:"Cinzel"}}> Testimonials</a>
                </il>
                <il className="hover:text-[#785F37]  transition-all cursor-pointer">
                <a href="/#portfolio" style={{fontFamily:"Cinzel"}}> Portfolio</a>
                
                </il>

                <il className="hover:text-[#785F37] transition-all  cursor-pointer">
                  <a href="/#contact" style={{fontFamily:"Cinzel"}}>Contact</a>
                </il>
              </ul>
            </div>
            <div
              onClick={() => setMenu(true)}
              className="hidden max-[950px]:block  text-[3rem] cursor-pointer hover:text-blue-600"
            >
              <MdOutlineMenu />
            </div>
            {/* <div className='flex gap-5   ' >
                <FaInstagram width={50} className='hover:text-pink-400 transition-all text-[1.4rem]'/>
                <CiYoutube width={50} className='hover:text-red-500 transition-all text-[1.4rem]'/>
                <CiFacebook width={50} className='hover:text-blue-500 transition-all text-[1.4rem]'/>
             </div> */}
          </div>
        </div>
        <div className={`${stick && 'hidden'} absolute top-[90%] z-40 w-[100%]  flex justify-center
       
         `
         }>

        <span className="border-[2px] h-[6px] w-[100%] bg-gradient-to-r from-[#785F37]  via-[#c0aa85] to-[#785F37]  rounded-lg"/>
        {/* <span className="border-[2px] h-[6px] absolute z-[-10] w-[2%] bg-gradient-to-r from-[#c0a77d]  to-[#c0a77d]  rounded-lg"/> */}

        {/* <span className="border-[2px] h-[6px]  w-[51%] bg-gradient-to-r from-[#c7b18b]  to-[#785F37]  rounded-lg"/> */}
        </div>
     <div  className="bg-[#050404] absolute w-[20%] b-0"/>
      </motion.div>
      {menu && (
        <div className="flex  fixed w-full h-[100vh] bg-[#000000f3] z-40 ">
          <div className="flex w-[100%] relative justify-center items-center">
            <IoCloseSharp
              onClick={() => setMenu(false)}
              className="absolute right-10 text-white top-10 text-lg hover:text-red-500 transition-all"
            />
            <div
              className="flex justify-center text- tracking-wider uppercase text-center text-white"
              style={{ fontFamily: "Lora" }}
            >
              <ul className="flex flex-col gap-5">
                <li className="hover:text-blue-600 transition-all cursor-pointer">
                  <a href="/#home">home</a>
                </li>
                <li className="hover:text-blue-600 transition-all cursor-pointer">
                  <a href="/#about">about</a>
                </li>
                <li className="hover:text-blue-600 transition-all cursor-pointer">
                  <a href="/#services">services</a>
                </li>
                <li className="hover:text-blue-600 transition-all cursor-pointer">
                  <a href="/#testimonial">Testimonial</a>
                </li>
                <li className="hover:text-blue-600 transition-all cursor-pointer">
                  <a href="/#portfolio">portfolio</a>
                </li>
                <li className="hover:text-blue-600 transition-all cursor-pointer">
                  <a href="/#contact">contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
