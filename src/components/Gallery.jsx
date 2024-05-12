import React, { useState } from 'react'

export default function Gallery() {
   const [fst,setFst]= useState(false)
   const [secd,setSecd]= useState(false)
   const [trd,setTrd]= useState(false)
   const [frt,setFrt]= useState(false)
   const [ft,setFt]= useState(false)
   const [st,setSt]= useState(false)
  return (
    <div className=' px-[10%] justify-center pt-[3rem]  bg-[#e9e9ec] flex flex-col'>
        <div className='flex flex-col gap-3 justify-center items-center pb-[2rem]'>
            <h4 className='text-[15px] uppercase font-bold' style={{fontFamily:'"Overpass",serif'}}>photo gallery</h4>
            <h1 className='font-bold text-[50px] capitalize' style={{fontFamily:' "Marcellus", serif'}}>checkout our gallery</h1>
        </div>

    <div className='relative grid grid-cols-2 gap-10 '>
     <div className='flex flex-col gap-10'>
        <a href="#" className='relative h-[40%] overflow-hidden'    onMouseEnter={()=>setFst(true)}
         onMouseLeave={()=>setFst(false)}>

        <img src={require('../assets/couples/1.jpg')} alt="" className='h-[100%] cursor-pointer w-[100%] transition-all'
      
         />
       <div className={`bg-[#201d1d57] absolute w-full top-0 h-full overflow-hidden transition-all ${fst ? 'block' : 'hidden'}`}/>
        </a>


        <a href="#" className='relative overflow-hidden h-[20%]'    onMouseEnter={()=>setSecd(true)}
         onMouseLeave={()=>setSecd(false)}>

        <img src={require('../assets/couples/2.jpg')} alt="" className='h-[100%] w-[100%] cursor-pointer'/>
        <div className={`bg-[#201d1d57]  absolute w-full top-0 h-full overflow-hidden transition-all ${secd ? 'block' : 'hidden'}`}/>
        </a>
        <a href="#" className='relative overflow-hidden h-[20%]'    onMouseEnter={()=>setTrd(true)}
         onMouseLeave={()=>setTrd(false)}>
        
        <img src={require('../assets/couples/3.jpg')} alt="" className='h-[100%] w-[100%] cursor-pointer'/>
        <div className={`bg-[#201d1d57]  absolute w-full top-0 h-full overflow-hidden transition-all ${trd ? 'block' : 'hidden'}`}/>
        
        </a>

            

 
     </div>
     <div className='flex flex-col gap-10'>
       
        <a href="#" className='relative overflow-hidden h-[20%]'    onMouseEnter={()=>setFrt(true)}
         onMouseLeave={()=>setFrt(false)}>
        <img src={require('../assets/couples/4.jpg')} alt="" className='h-[100%] w-[100%] cursor-pointer'/>
        
        <div className={`bg-[#201d1d57]  absolute w-full top-0 h-full overflow-hidden transition-all ${frt ? 'block' : 'hidden'}`}/>
        
        </a>

        <a href="#" className='relative overflow-hidden h-[20%]'    onMouseEnter={()=>setFt(true)}
         onMouseLeave={()=>setFt(false)}>
        <img src={require('../assets/couples/5.jpg')} alt="" className='h-[100%] w-[100%] cursor-pointer'/>

        <div className={`bg-[#201d1d57]  absolute w-full top-0 h-full overflow-hidden transition-all ${ft ? 'block' : 'hidden'}`}/>
        </a>


        <a href="#" className='relative overflow-hidden h-[40%]'    onMouseEnter={()=>setSt(true)}
         onMouseLeave={()=>setSt(false)}>
        <img src={require('../assets/couples/6.jpg')} alt="" className='h-[100%] w-[100%] cursor-pointer'/>
        
        <div className={`bg-[#201d1d57]  absolute w-full top-0 h-full overflow-hidden transition-all ${st ? 'block' : 'hidden'}`}/>
        
        </a>

     </div>
    </div>
    </div>
  )
}
