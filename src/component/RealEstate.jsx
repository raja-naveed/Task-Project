import React from 'react'
export const Details = [
  {
    imageUrl: '/images/realestate.jpg',
    title: 'REAL ESTATE'
  },
  {
    imageUrl: '/images/car.jpg',
    title: 'CARS'
  },
  {
    imageUrl: '/images/yatch.jpg',
    title: 'YATCHS'
  },
  {
    imageUrl: '/images/watch.jpg',
    title: 'WATCHES'
  },
  {
    imageUrl: '/images/plane.jpg',
    title: 'JETS'
  },
  {
    imageUrl: '/images/island.jpg',
    title: 'PRIVATE ISLANDS'
  },
  {
    imageUrl: '/images/diamond.jpg',
    title: 'DIAMONDS'
  },
  {
    imageUrl: '/images/travel.jpg',
    title: 'TRAVEL THE WORLD'
  },

];

const RealEstate = () => {
  return (
    <>
      {Details.map((item, index) => {

        return (
          <div className='relative' key={index}>
            <div className="min-h-screen flex flex-col justify-center xl:text-center items-center relative px-8 bg-black bg-no-repeat bg-center bg-cover text-white "
              style={{ backgroundImage: `url(${item.imageUrl})` }}

            >
              <div className="absolute inset-0 bg-black opacity-50"></div>

              <h4 className="text-[40px] uppercase text-white opacity-50 tracking-wider text-center " >{item.title}</h4>
              {index == '1' &&<div class=" absolute car-models w-80 md:w-96 right-7 bottom-5">
                <img src="/images/cars-model.png" alt=""/>

                </div>}
            </div>
          </div>
        )
      })
      }
    </>

  )
}

export default RealEstate;
