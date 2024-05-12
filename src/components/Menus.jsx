import React from "react";
// import { IoLogoInstagram } from "react-icons/io";
import { CiFacebook, CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Menus() {
  return (
    <div className="w-full overflow-hidden flex justify-center items-center box-content  max-md:py-[2rem] md:py-[4rem] bg-[#ece8e2]">
      <div className="md:flex max-md:flex-col gap-10 justify-center max-w-[1320px] px-[8%] ">
        <div className="flex max-md:hidden flex-col justify-center items-center  gap-5">
          <div className="flex  flex-col gap-2 text-md  text-center   " style={{fontFamily:"Lora"}}> 
            <h4>Captivating Visuals,</h4>
            <h4>Professional Quality,</h4>
            <h4>Unforgettable Moments</h4>
          </div>

          <div className="border-2 border-black px-[rem] py-1 w-[8rem] text-white bg-black text-center">
            <button>Enquiry here</button>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center w-[30rem]  pt-[2rem] border-black md:border-l-[1px] md:border-r-[1px] px-[2rem] ">
          <div className="w-[14rem] max-md:border-b-[1px] border-black px-[3rem] pb-5">
            <img src={require("../assets/unoptiImages/NEO-logo.png")} alt="" />
          </div >
          <p className="md:border-t-[1px] border-black flex text-[11px] tracking-wider leading-relaxed text-center
          max-md:pt-[1rem]
          md:pt-[2rem] md:w-[70%] max-md:w-[65%]" style={{fontFamily:'Lora'}}>
            The NEOWEDS crew which is team of 83 well professional photographers
            has photographed over 800 weddings and over 300 engagement photos
            for different couples from throughout the nation.
          </p>
          <div className="flex gap-3 mt-2 max-md:mt-5"> 
          <a href="https://www.instagram.com/neo_weds/?utm_source=qr&igsh=emlxOHhjZHJpM3kz">

          <FaInstagram width={50} className='hover:text-pink-400 cursor-pointer transition-all text-[1.4rem]'/>
          </a>
          <a href="https://youtube.com/@neo_weds?si=DJtusu-U61OdhECi">

                <CiYoutube width={50} className='hover:text-red-500 transition-all cursor-pointer text-[1.4rem]'/>
          </a>
          <a href="#">

                <CiFacebook width={50} className='hover:text-blue-500 transition-all text-[1.4rem] cursor-pointer'/>
          </a>
          </div>
        </div>
        
<div className="flex flex-col uppercase max-md:mt-5 justify-center items-center" style={{fontFamily:'Lora'}}>
    <h1 className="uppercase text-xl font-bold md:mb-[1rem] max-md:mb-2">Menu</h1>
    <h4 className="hover:text-blue-600 transition-all cursor-pointer"><Link to={'/#home'}>home</Link></h4>
    <h4 className="hover:text-blue-600 transition-all cursor-pointer"><Link to={'/engegment/#home'}>Engagement</Link></h4>
    <h4 className="hover:text-blue-600 transition-all cursor-pointer"><Link to={'/wedding/#home'}>wedding</Link></h4>
    <h4 className="hover:text-blue-600 transition-all  cursor-pointer"> <Link to={'/pre-wedding/#home'}>pre-wedding</Link></h4>
</div>

<div className="flex md:hidden max-md:mt-[2rem] flex-col justify-center items-center  gap-5">
          <div className="flex  flex-col gap-2 text-md  text-center   " style={{fontFamily:"Lora"}}> 
            <h4>Captivating Visuals,</h4>
            <h4>Professional Quality,</h4>
            <h4>Unforgettable Moments</h4>
          </div>

          <div className="border-2 border-black px-[rem] py-1 w-[8rem] text-white bg-black text-center">
            <button>Enquiry here</button>
          </div>
        </div>
      </div>
    </div>
  );
}
