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
        className={`nav lg:px-[7rem] max-md:px-[0.5rem] z-40 overflow-hidden fixed w-[100vw] ${stick ? 'bg-[#d7d6dc] text-[#111]' : 'bg-transparent text-white'} shadow-md`}
      >
        <div className=" items-center w-[100%]   p-[1rem]  transition-all">
          <div className="h-full text-center flex  gap-5  justify-between items-center font-[500]">
            <div
              className="flex gap-3 max-md:hidden  "
              //  style={{zIndex:3,position:stick ? 'fixed' : "sticky",transition:stick && '0.5s easeInOut'}}
            >
              <ul className="flex gap-10 uppercase text-[15px] tracking-widest leading-6 font-lightbold">
                <il className="hover:text-blue-600 transition-all cursor-pointer">
                  <a href="/#home">Home</a>
                </il>
                <il className="hover:text-blue-600 transition-all cursor-pointer">
                  <a href="/#about">About</a>
                </il>
                <il className="hover:text-blue-600 transition-all cursor-pointer">
                  <a href="/#services">Serices</a>
                </il>
              </ul>
            </div>
            <div className="md:w-[8rem] max-md:w-[6rem]">
              <img
                src={logo}
                alt=""
                className="h-[2.3rem] w-[] lg:ml-[50%] items-center "
              />
            </div>
            <div
              className="flex gap-3  max-md:hidden "
              //  style={{zIndex:3,position:stick ? 'fixed' : "sticky",transition:stick && '0.5s easeInOut'}}
            >
              <ul className="flex gap-7 uppercase text-[15px] tracking-widest leading-6 font-lightbold">
                <il className="hover:text-blue-600 transition-all cursor-pointer">
                  <a href="/#testimonial">TESTIMONIALS</a>
                </il>
                <il className="hover:text-blue-600 transition-all cursor-pointer">
                  <a href="/#portfolio">PORTFOLIO</a>
                </il>

                <il className="hover:text-blue-600 transition-all cursor-pointer">
                  <a href="/#contact">CONTACT</a>
                </il>
              </ul>
            </div>
            <div
              onClick={() => setMenu(true)}
              className="hidden max-md:block  text-[3rem] cursor-pointer hover:text-blue-600"
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
