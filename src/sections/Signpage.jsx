import React from 'react'
import Zodiac from '/images/zdoc.png'
import Zidoc from '/images/zidoc.png'
import Signature from '/images/signatures.png'

const Signpage = () => {
  return (
    <div class="container mx-auto min-h-screen flex flex-col justify-between mt-[40px]">
      <div>
        <img src={Zodiac} className="block mx-auto items-center " alt="zdoc." />
      </div>
      <div class="pb-16 md:pb-8 ">
        <p className='relative  top-[27px] text-center uppercase  text-[20px] tracking-[2px] text-[#737373] mb-6 px-2'>
          Document-signing software technology that lets you sign documents online.
        </p>
        <div class="w-[300px] ml-auto mt-8">
          <div class="flex justify-between border-[rgba(0,0,0,0.4)] border-b border-solid pb-2">
            <img src={Zidoc} alt="zdoc" className='h-[60px] w-[45px]'/>
              <img src={Signature} alt="zdoc" className='h-[90px] w-[200px]' />
          </div>
          <small class="text-[8px] float-right pt-1">ZD:SID 46791269900490374129</small>
        </div>
      </div>
    </div>
  )
}

export default Signpage
