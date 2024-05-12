import React from "react";

export default function About() {
  return (
    <div className="flex flex-col bg-[#e9e9ec] pb-[6rem]">
      <div className="flex md:mx-[8%] mt-[6rem] gap-[2rem] items-center max-w-[1320px]">
        <div className="flex border-[2px] md:px-[3rem] ">
          <div className="flex flex-col text-center uppercase pb-[1rem]">
            <span
              className="text-[9rem] font-bold h-fit"
              style={{ fontFamily: `"Marcellus", serif` }}
            >
              12
            </span>
            <span
              className="text-3xl pb-3 font-bold "
              style={{ fontFamily: `"Marcellus", Sans-serif` }}
            >
              years
            </span>
            <p
              className="text-2xl"
              style={{ fontFamily: `"Marcellus", Sans-serif` }}
            >
              of experience
            </p>
          </div>
        </div>

        <div>
          <div>
            <h4
              className="text-[15px] uppercase font-bold tracking-wider"
              style={{ fontFamily: '"Overpass", serif' }}
            >
              introduction
            </h4>
            <span
              className="text-[50px] font-bold flex-wrap capitalize"
              style={{ fontFamily: `"Marcellus", serif` }}
            >
              Secret Of Success Of Our Photography Projects
            </span>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-5 w-[27rem]">
            <p className="text-sm tracking-wide leading-6 ">
              Magnam consequatur ipsa faucibus porro accusamus nostrud, a odit
              vitae! Duis cumque, vivamus turpis, et, nunc necessitatibus
              hendrerit! Temporibus, eos laborum porttitor perspiciatis
              consequat, accusamus eos incididunt odit porta class, ridiculus
              fusce! consequat, accusamus eos incididunt odit porta class,
              ridiculus
            </p>
            <button className="border-[2px] w-[12rem] border-black  px-[2rem] py-[0.5rem] text-xl font-semibold">Know More</button>
          </div>
        </div>
      </div>
      <div className='flex justify-center px-[10%] pt-[5rem] pb-[6rem] '>
      <div className='flex flex-wrap gap-10'>
        <img src={require('../assets/newImages/Screenshot 2024-05-01 173823.png')} alt="" className='w-[30%] mb-[4rem]' />
        <img src={require('../assets/newImages/amer-2.jpg')} alt="" className='w-[30%] pt-[4rem]'/>
        <img src={require('../assets/newImages/pre-wedd.jpg')} alt="" className='w-[30%] mb-[4rem]' />
      
      </div>
    </div>
    </div>
  );
}
