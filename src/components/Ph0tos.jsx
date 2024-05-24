import React from 'react'


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import "swiper/css/effect-fade";
import "./photo.css";
import 'swiper/css/zoom';
// import required modules

import { motion } from 'framer-motion';

import data from './Gall';

export default function Ph0tos() {
  // const [thumbsSwiper, setThumbsSwiper] = useState({
  //   1:false,
  //   2:false,
  //   3:false,
  //   4:false,
  //   5:false,
  //   6:false,
  //   7:false,
  //   8:false,
  //   9:false,
  //   10:false,
  //   11:false,
  //   12:false,
   
  // });
  return (
    <div className='flex flex-col relative   justify-center md:pt-[1rem]  items-center  lg:px-[5%] md:px-[5%] sm:px-[3%]   overflow-hidden  '>
        <motion.div 
      // viewport={{once:true}} initial={{x:50}} whileInView={{x:0,transition:{type:'spring',ease:'easeIn',duration:2}}}
       className='max-xl:shadow-md max-w-[1320px] flex flex-col overflow-hidden  w-[100%] justify-center items-center  max-md:w-[100%]  max-xl:border-[#110e0e]  '>
        <h1 className='md:text-[2rem] max-md:text-[1.5rem] pb-[2rem] uppercase md:pt-[6rem]' >Ethereal Gallery</h1>

        <div 
         className='   w-[100%] max-w-[1320px]  flex flex-col justify-center overflow-hidden items-center  '>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 max-md:grid-cols-2 gap-2'>
           {data?.map((data,index)=>(
            <motion.div viewport={{once:true} } whileHover={{scale:0.99,transition:{type:'spring'}}} initial={{opacity:0}} whileInView={{opacity:1,transition:{delay:index*0.3,type:'tween',ease:'easeInOut'}}} className='relative' key={data.id} >
            <img src={data.img} alt="" className='w-[100%] shadow-md h-[100%] object-cover' />
            {/* <div className={`bg-[#252424d8]  ${thumbsSwiper.index ? 'flex hover:text-blue-600' :'hidden'}  text-white text-md absolute w-full h-full top-0 left-0 flex justify-center items-center`}> 
              Explore More
            </div> */}
          </motion.div>
           )) }
        </div>
        <button className="p-[3px] relative mt-[2rem]">
  <div className="absolute inset-0 bg-gradient-to-r from-pink-500  to-purple-400 rounded-lg" />
  <div className="px-8 py-2   rounded-[6px]  relative group transition duration-200 text-black hover:text-white font-bold hover:bg-transparent">
  <a href="https://www.instagram.com/neo_weds/?utm_source=qr&igsh=emlxOHhjZHJpM3kz" className="flex gap-4 justify-center items-center">Connect now </a>
  </div>
</button>
        </div>
       </motion.div>
    </div>
  )
}
