import React from 'react'
import Image from '../assets/zimo.png'
import zimoblack from '../assets/zimo-logo-2.png'
const Page3 = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center text-center">

      <img src={Image} alt="" className="sm:w-[800px] sm:h-[200px] w-[1600px] h-[488px] absolute -translate-x-[50%] -translate-y-[50%] top-[50%] bottom-[50%] right-[50%] left-[50%] blur-lg" />
      <div>
        <h2 className="text-[25px] font-normal uppercase tracking-wider">
          Bringing the world closer together.
        </h2>
        <img className="block mx-auto mt-6" src={zimoblack} alt="" />

      </div>

    </div>
  )
}

export default Page3
