import React from 'react'
import Image from '../assets/zimo.png'
import ZimoGroup from '../assets/zimoGroupDark.png';
import Arrow from '../assets/ArrowDark.png';


const Main = () => {
  return (
    <div className=" container mx-auto h-screen flex justify-between flex-col relative ">
      <img src={Image} alt="" className="sm:w-[800px] sm:h-[200px] w-[1600px] h-[488px] absolute -translate-x-[50%] -translate-y-[50%] top-[50%] bottom-[50%] right-[50%] left-[50%] blur-lg" />
      <div className=' my-auto gap-y-8 px-20 pt-28 sm:p-0 '>
        <img src={ZimoGroup} alt="" className='md:w-[380px] w-[420px] pl-4' />
      </div>
      <div className="arrow space-y-14 flex flex-col items-center justify-center sm:absolute sm:bottom-0 sm:right-0 sm:left-0 pb-8">
        <a>
          <img src={Arrow} alt="arrow-dark" className="w-15 cursor-pointer hover:scale-150 " />
        </a>
      </div>

    </div>
  )
}

export default Main;
