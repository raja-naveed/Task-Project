import React from 'react'
import Image from '/images/logo2-white.png'
const Page = () => {
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center   relative text-white ">
      <div className="container mx-auto flex flex-col justify-center gap-8 xl:flex-row items-center min-h-screen py-16 relative">
        <img src={Image} alt="" className='absolute left-0' />
        <div className="text-center mx-auto text-[30px] tracking-wider aos-init aos-animate">
          <p>We are the global platform.</p>
          <p className="mt-3">Services in over one hundred and twenty countries.</p>
          </div>
      </div>
      
    </div>
  )
}

export default Page;
