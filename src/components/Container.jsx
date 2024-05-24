import React, { useState } from "react";
// import About1 from "./About1";
import Intro from "./Intro";
import NewAbout from "./NewAbout";
import Couple from "./Couple";
import Testimonial from "./Testimonial";
import Ph0tos from "./Ph0tos";
import Exper from "./Exper";
import Enquiry from "./Enquiry";
import Images from "./Images";
import Menus from "./Menus";
import Footer from "./Footer";
import Header from "./Header";
import Banner from "./Banner";
// import CameraLoader from "./Loader";
// import RotatingImageSlider from "./Rotate";
// import ImageCube from "./Rotate";
// import { Canvas } from "react-three-fiber";
import ImageSlider from "./Rotate";
// import Round from "./Round";
// import svg from './Loader.svg'
// import Loader from "./Loader";
export default function Containers() {
 const [loader,setLoader]= useState(true)
 setTimeout(()=>{
  setLoader(false)
 },3000)
  return (
    <div className="">
{loader ? 
<div className="absolute w-full h-full flex justify-center items-center">
<img src={require('../assets/NEO-logo.png')} alt="logo" width={200} className="flex justify-center items-center absolute w-[7rem] "/> 
</div>
:
  <>
    <Header />
      {/* <MobileMenu/> */}
      <Banner />
      <div className="bg-[#d7d6dc]">
      <ImageSlider/>
      {/* <About1 /> */}
      <Intro />
      
      <Ph0tos />   
      {/* <Round/> */}
      <NewAbout />
      <Couple />
      <Testimonial />
      <Exper />
      <Enquiry />
      <Images />
      <Menus />
      </div>
      {/* <About/> */}
      {/* <Gallery/> */}
      <Footer />
  </>
}
    
    </div>
  );
}
