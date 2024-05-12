import React from 'react'

export default function Enquiry() {
  return (
    <div id='contact' className='xl:h-[35rem] max-md:h-[20rem] relative overflow-hidden w-[100%]'>
      <div className='flex h-full w-[100%] justify-center'>
        <div className='h-[100%] w-[100%]'>
            <img src={require('../assets/newImages/pgjbli5yugsgwexgtqzb.jpg')} alt="" className='w-[100%] object-cover h-[100%]' />
        </div>
        <div className='absolute flex justify-center bg-white xl:right-[4rem] md:px-[3rem] max-md:px-[2rem] mx-[3%] top-[30%]
         md:py-[1.3rem] max-md:py-[1rem] xl:top-[40%]'>
            <div className='flex flex-col gap-2'>
            <h2 style={{fontFamily:'Lora'}} className='text-[2rem] tracking-wider font-[400] max-md:text-[1.5rem] max-md:text-center'>I want to know you!</h2>
            <p style={{fontFamily:'Lora'}} className='text-[14px] tracking-wider font-[400] max-md:text-center '>Tell me all about your love story and future dreams.</p>
            <a href="#" style={{fontFamily:'Lora'}} className='text-[11px] max-md:items-center max-md:justify-center max-md:ml-[25%] border-0 bg-black text-white px-[2rem] py-[0.6rem] tracking-wider font-[400] uppercase w-fit mt-4'>Inquire Here</a>
            </div>
        </div>
      </div>
    </div>
  )
}
