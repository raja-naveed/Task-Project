import React from 'react'
import Services from '/images/services.png'
import ZimoGroup from '/images/zimo-group.png'
const Group = () => {
  return (
    <div className='bg-black'>
      <div className="container mx-auto min-h-screen py-8 relative">
        <div className="services">
          <img src={Services} alt="" />
        </div>
        <img
          src={ZimoGroup}
          alt=""
          className="absolute blur-sm lg:blur-md"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>
    </div>

  )
}

export default Group
