import React from 'react'

const ThankYou = () => {
  return (
    <div className='' style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
      <div className="container mx-auto flex flex-col h-screen items-center justify-center">
        <div className=''>
          <img src="/images/thankyou.svg" className="h-[40px] block mx-auto" alt="" />

        </div>
        </div>
        <div>
          <img src="/images/zimo-logo-2.png" className="h-[30px]  mx-auto" alt=""/>
            <div className="mt-8 flex justify-center items-center text-center gap-4 font-normal md:gap-8 text-[10px] uppercase tracking-widest pb-12">
              <button>
                TERMS OF SERVICE
              </button>
              <p>
                © ZIMO GROUP 2023
              </p>
              <button>
                PRIVACY POLICY
              </button>
            </div>
        
      </div>
    </div>
  )
}

export default ThankYou;
