import React from "react";
import { slideIn } from "./../utils/motion";
import { motion } from "framer-motion";
export const Details = [
  {
    imageUrl: "/images/realestate.jpg",
    title: "REAL ESTATE",
  },
  {
    imageUrl: "/images/car.jpg",
    title: "CARS",
  },
  {
    imageUrl: "/images/yatch.jpg",
    title: "YATCHS",
  },
  {
    imageUrl: "/images/watch.jpg",
    title: "WATCHES",
  },
  {
    imageUrl: "/images/plane.jpg",
    title: "JETS",
  },
  {
    imageUrl: "/images/island.jpg",
    title: "PRIVATE ISLANDS",
  },
  {
    imageUrl: "/images/diamond.jpg",
    title: "DIAMONDS",
  },
  {
    imageUrl: "/images/travel.jpg",
    title: "TRAVEL THE WORLD",
  },
];

const RealEstate = () => {
  return (
    <div className="section" id="section5">
      {Details.map((item, index) => {
        return (
          <div className="relative" key={index}>
            <div
              className="min-h-screen flex flex-col justify-center xl:text-center items-center relative px-8 bg-black bg-no-repeat bg-center bg-cover text-white "
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>

              <motion.h4
                variants={slideIn("left", 0.1)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
                className="text-[40px] uppercase text-white opacity-50 tracking-wider text-center "
              >
                {item.title}
              </motion.h4>
              {index == "1" && (
                <motion.div
                  variants={slideIn("up", 0.1)}
                  initial="hidden"
                  whileInView="show"
                  exit="hidden"
                  class=" absolute car-models w-80 md:w-96 right-7 bottom-5"
                >
                  <img src="/images/cars-model.png" alt="" />
                </motion.div>
              )}
            </div>
            <a className="navigate">
              <img
                src="/images/down-arrow.png"
                alt="arrow-dark"
                height={80}
                width={40}
                className="cursor-pointer z-10 hover:scale-150 hover:brightness-100 animate-bounce hover:animate-ping"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default RealEstate;
