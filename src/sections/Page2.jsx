import React from 'react'

const Page2 = ({text}) => {
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center relative text-white ">
      <h4 className="text-[16px] lg:text-[25px] uppercase text-white tracking-wider" >
        {text}
      </h4>
    </div>
  )
}

export default Page2
