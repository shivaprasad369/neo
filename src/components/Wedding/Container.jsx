import React, { useState } from 'react'
import Header from './Header'
import Banner from './Banner'
import Main from './Main'
import Enquiry from '../Enquiry'

import Menus from '../Menus'
import Footer from '../Footer'
import Images from './Images'
// import CameraLoader from '../Loader'

export default function Container() {
  const [loader,setLoader]= useState(true)
  setTimeout(()=>{
   setLoader(false)
  },3000)
   return (
     <div>
 {loader ? <div className="absolute w-full h-full flex justify-center items-center">
<img src={require('../../assets/NEO-logo.png')} alt='logo' width={200} className="flex justify-center items-center absolute w-[7rem] "/> 
</div>
 :
    <div className='bg-[#d7d6dc]'>
      <Header/>
      <Banner/>
      <Main/>
      <Enquiry/>
     <Images/>
      <Menus/>
      <Footer/>
    </div>
}</div>
  )
}
