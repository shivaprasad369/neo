import React, { useState } from 'react'

export default function Round() {
   const [stop, setStop]= useState(false)
  return (
    <div className='flex justify-center items-center bg-[#ece8e2] h-[100%] w-[100%] md:py-[15%] max-md:py-[20%]'>
      <div className='box max-md:hidden md:w-[280px] md:h-[250px] max-md:w-[150px] max-md:h-[200px]' style={{animationPlayState:stop ? 'paused' :'running'}} onMouseEnter={()=>setStop(true)} onMouseLeave={()=>setStop(false)}>
       <span className='' style={{i:1,transform:'rotateY(calc(1*45deg)) translateZ(450px)'}}> <img className='' src={require('../assets/couples/3.jpg')}   alt="" /> </span> 
        <span style={{i:2,transform:'rotateY(calc(2*45deg)) translateZ(450px)'}}><img className='' src={require('../assets/couples/2.jpg')}  alt="" /> </span>
        <span style={{i:3,transform:'rotateY(calc(3*45deg)) translateZ(450px)'}}> <img className=''  src={require('../assets/couples/4.jpg')}  alt="" /> </span>
        <span style={{i:4,transform:'rotateY(calc(4*45deg)) translateZ(450px)'}}><img className='' src={require('../assets/s.jpg')} alt="" /> </span>
         <span style={{i:5, transform:'rotateY(calc(5*45deg)) translateZ(450px)'}}><img className='' src={require('../assets/s2.jpg')} alt="" /> </span>
         <span style={{i:6,transform:'rotateY(calc(6*45deg)) translateZ(450px)'}}><img className='' src={require('../assets/newImages/banner1.jpg')}alt="" /> </span>
         <span style={{i:7,transform:'rotateY(calc(7*45deg)) translateZ(450px)'}}><img className='' src={require('../assets/youtube/y1.jpg')}  alt="" /> </span>
         <span style={{i:7,transform:'rotateY(calc(8*45deg)) translateZ(450px)'}}><img className='' src={require('../assets/couples/1.jpg')}  alt="" /> </span>
       
       </div>

       <div className='box1 max-md:block md:hidden md:w-[280px] md:h-[200px] max-md:w-[250px] max-md:h-[270px]' style={{animationPlayState:stop ? 'paused' :'running'}} onMouseEnter={()=>setStop(true)} onMouseLeave={()=>setStop(false)}>
       <span className='' style={{i:1,transform:'rotateY(calc(1*45deg)) translateZ(400px)'}}> <img className='' src={require('../assets/couples/3.jpg')}   alt="" /> </span> 
        <span style={{i:2,transform:'rotateY(calc(2*45deg)) translateZ(400px)'}}><img className='' src={require('../assets/couples/2.jpg')}  alt="" /> </span>
        <span style={{i:3,transform:'rotateY(calc(3*45deg)) translateZ(400px)'}}> <img className=''  src={require('../assets/couples/4.jpg')}  alt="" /> </span>
        <span style={{i:4,transform:'rotateY(calc(4*45deg)) translateZ(400px)'}}><img className='' src={require('../assets/s.jpg')} alt="" /> </span>
         <span style={{i:5, transform:'rotateY(calc(5*45deg)) translateZ(400px)'}}><img className='' src={require('../assets/s2.jpg')} alt="" /> </span>
         <span style={{i:6,transform:'rotateY(calc(6*45deg)) translateZ(400px)'}}><img className='' src={require('../assets/newImages/banner1.jpg')}alt="" /> </span>
         <span style={{i:7,transform:'rotateY(calc(7*45deg)) translateZ(400px)'}}><img className='' src={require('../assets/youtube/y1.jpg')}  alt="" /> </span>
         <span style={{i:7,transform:'rotateY(calc(8*45deg)) translateZ(400px)'}}><img className='' src={require('../assets/couples/1.jpg')}  alt="" /> </span>
       
       </div>
    </div>
  )
}
