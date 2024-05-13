import React, { useState } from 'react'
import Header from './Header'
import Banner from './Banner'
import Main from './Main'
import Enquiry from '../Enquiry'

import Menus from '../Menus'
import Footer from '../Footer'
import Images from './Images'
import CameraLoader from '../Loader'

export default function Container() {
  const [loader,setLoader]= useState(true)
  setTimeout(()=>{
   setLoader(false)
  },3000)
   return (
     <div>
 {loader ? <CameraLoader/> 
 :
   <>
     <div className='bg-[#ece8e2]'>
      <Header/>
      <Banner/>
      <Main/>
      <Enquiry/>
     <Images/>
      <Menus/>
      <Footer/>
    </div>
    </>}
    </div>
  )
}
