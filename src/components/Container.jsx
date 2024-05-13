import React, { useState } from "react";
import About1 from "./About1";
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
import CameraLoader from "./Loader";
// import svg from './Loader.svg'
// import Loader from "./Loader";
export default function Containers() {
 const [loader,setLoader]= useState(true)
 setTimeout(()=>{
  setLoader(false)
 },3000)
  return (
    <div>
{loader ? <CameraLoader/> 
:
  <>
    <Header />
      {/* <MobileMenu/> */}
      <Banner />
      <About1 />
      <Intro />
      <NewAbout />
      <Couple />
      <Testimonial />
      <Ph0tos />
      <Exper />
      <Enquiry />
      <Images />
      <Menus />
      {/* <About/> */}
      {/* <Gallery/> */}
      <Footer />
  </>
}
    
    </div>
  );
}
