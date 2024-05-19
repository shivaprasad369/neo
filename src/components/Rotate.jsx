import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css'
import { EffectCoverflow, Autoplay } from 'swiper/modules';

import slide_image_1 from '../assets/youtube/y1.jpg';
import slide_image_2 from '../assets/youtube/y2.jpg';
import slide_image_3 from '../assets/youtube/y3.jpg';
import slide_image_4 from '../assets/youtube/y4.jpg';
import slide_image_5 from '../assets/youtube/y5.jpg';
import slide_image_6 from '../assets/youtube/y6.jpg';
// import slide_image_7 from '../assets/newImages/NEO08975.jpg';
import AlertDialogSlide from './Youtube';

function ImageSlider() {
  const [open, setOpen] = React.useState({
    opens:false,
    url:''
  });
  // const {url,setUrl}=React.useState('')

  const handleClickOpen = (uri) => {
    setOpen({opens:true,url:uri});
    
    // setUrl('https://www.youtube.com/watch?v=OtqxDT0IlHI&t=25s')
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="container bg-[#ece8e2]">
      <h1 className="lg:text-[2.3rem] md:text-[1.5rem] text-[#292929] max-md:text-center
             max-md:text-[1.5rem] lg:leading-[2.7rem] tracking-wider uppercase items-center text-center"
            style={{ fontFamily: '"Antic Didone"' }}>Wedding films</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: -20,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        // pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow,Autoplay]}
        className="swiper_container"
      >
        <SwiperSlide className='swiperslide' onClick={()=>{handleClickOpen('https://www.youtube.com/embed/oSrkkdMfH1c?si=7B1ZXX6sX1tVWbIp')}} >
          <img className='relative' src={slide_image_1} alt="slide_image" />
          <span className='w-full absolute flex justify-center items-center text-xl text-white font-bold bottom-[10%]'>HABIB FAMILY</span>
        </SwiperSlide>
        <SwiperSlide className='swiperslide' onClick={()=>handleClickOpen('https://www.youtube.com/embed/fbfB3Wv7KnU?si=-IANu8CVKFIfA2rH')}>
          <img className='relative' src={slide_image_2} alt="slide_image" />
          <span className='w-full absolute flex justify-center items-center text-xl text-white font-bold bottom-[10%]'>PAVAN & SAMITA</span>
        </SwiperSlide >
        <SwiperSlide className='swiperslide' onClick={()=>handleClickOpen('https://www.youtube.com/embed/kcQoAPhFUYw?si=ylPtUpVc_nSnrwe1')}>
          <img src={slide_image_3} alt="slide_image" className='relative'/>
        <span className='w-full absolute flex justify-center items-center text-xl text-white font-bold bottom-[10%]'>SNEHA & RAJATH</span>
        </SwiperSlide> 
        <SwiperSlide className='swiperslide' onClick={()=>handleClickOpen('https://www.youtube.com/embed/AKa_gG-pkT4?si=jup5mmIim_fEFEXv')}>
          <img  src={slide_image_4} alt="slide_image" className='relative'/>
          <span className='w-full absolute flex justify-center items-center text-xl text-white font-bold bottom-[10%]'>NITESH & PURNASHREE</span>
        
        </SwiperSlide>
        <SwiperSlide className='swiperslide'onClick={()=>handleClickOpen('https://www.youtube.com/embed/lPNNEs2AhRU?si=5EzNTOeQu5mVgFQD')}>
          <img src={slide_image_5} alt="slide_image" className='relative' />
          <span className='w-full absolute flex justify-center items-center text-xl text-white font-bold bottom-[10%]'>DEEPTI & CHETAN</span>

        </SwiperSlide>
        <SwiperSlide className='swiperslide' onClick={()=>handleClickOpen('https://www.youtube.com/embed/TYMeDC6whfA?si=ve4gVBkyR_8VNL9y')}>
          <img src={slide_image_6} alt="slide_image" className='relative'/>
          <span className='w-full absolute flex justify-center items-center text-xl text-white font-bold bottom-[10%]'>AKARSH & AISHWARYA</span>

        </SwiperSlide>
        {/* <SwiperSlide className='swiperslide'onClick={()=>handleClickOpen}>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide> */}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      <AlertDialogSlide open={open.opens} url={open.url} setOpen={setOpen} handleClose={handleClose} handleClickOpen={handleClickOpen}/>
    </div>
  );
}

export default ImageSlider;