import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Main from './Main'
import Enquiry from '../Enquiry'

import Menus from '../Menus'
import Footer from '../Footer'
import Images from './Images'

export default function Container() {
  return (
    <div className='bg-[#ece8e2]'>
      <Header/>
      <Banner/>
      <Main/>
      <Enquiry/>
     <Images/>
      <Menus/>
      <Footer/>
    </div>
  )
}
