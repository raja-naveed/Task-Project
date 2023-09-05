import React from 'react'
export const Details = [
  {
    imageUrl: '../../src/assets/realestate.jpg',
    title: 'REAL ESTATE'
  },
  {
    imageUrl: '../../src/assets/car.jpg',
    title: 'CARS'
  },
  {
    imageUrl: '../../src/assets/yatch.jpg',
    title: 'YATCHS'
  },
  {
    imageUrl: '../../src/assets/watch.jpg',
    title: 'WATCHES'
  },
  {
    imageUrl: '../../src/assets/plane.jpg',
    title: 'JETS'
  },
  {
    imageUrl: '../../src/assets/island.jpg',
    title: 'PRIVATE ISLANDS'
  },
  {
    imageUrl: '../../src/assets/diamond.jpg',
    title: 'DIAMONDS'
  },
  {
    imageUrl: '../../src/assets/travel.jpg',
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
                <img src="../../src/assets/cars-model.png" alt=""/>

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
