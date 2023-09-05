import React from 'react'
import Zimo from '/images/zimo-logo.png'
import ZimoPro from '/images/zimo-pro.png'

const Revolutionary = () => {
  return (
    <div className='flex min-h-screen flex-col justify-center py-8'>
      <p className="text-[30px] text-center tracking-wider">REVOLUTIONARY</p>
      <div className="container mx-auto flex flex-col md:flex-row my-8 gap-8 justify-around items-center">
        <img src={Zimo} alt="zimo" className="w-52 md:w-72" />
        <div
          style={{
            borderLeft: '1px solid #BE9F56',
            borderTop: '1px solid #BE9F56'
          }}
          className="h-0 w-52 md:h-[250px] md:w-0 opacity-50"
        />
        <img src={ZimoPro} alt="zimo pro" className="w-52 md:w-72" />

      </div>
      <p className="text-center text-[30px] tracking-wider">The only platform of it's kind in the world.</p>


    </div>
  )
}

export default Revolutionary;
