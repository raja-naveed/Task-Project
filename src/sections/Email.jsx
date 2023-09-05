import React from 'react'
import Image from '/images/logo2-white.png'
const Email = () => {
  return (
    <div className='bg-black h-screen flex flex-col justify-center items-center relative'>
      <img src={Image} alt="" className="sm:w-[400px] sm:h-[100px] w-[1000px] h-[244px]  absolute -translate-x-[50%] -translate-y-[50%] top-[50%] bottom-[50%] right-[50%] left-[50%] blur-lg " />
      <div className="email text-white text-center ">
        <h2 className='text-[16px] lg:text-[25px] uppercase text-white tracking-wider mb-[200px]'>INTERESTED IN WORKING WITH US?</h2>
        <h2 className='text-[16px] lg:text-[25px] uppercase text-white tracking-wider'>EMAIL</h2>
      </div>
    </div>
  )
}

export default Email;
