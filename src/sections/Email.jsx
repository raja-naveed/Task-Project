import React from "react";
import { motion } from "framer-motion";
import Image from "/images/logo2-white.png";

const Email = () => {
  const imageAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 5 } },
  };

  return (
    <div className="section bg-black">
      <div className="h-screen flex flex-col justify-center items-center relative">
        <motion.img
          src={Image}
          alt=""
          className="sm:w-[400px] sm:h-[100px] w-[1000px] h-[244px] absolute inset-0 m-auto blur-lg"
          initial="hidden"
          whileInView="visible"
          variants={imageAnimation}
        />
        <div className="email text-white text-center ">
          <h2 className="text-[16px] lg:text-[25px] uppercase text-white tracking-wider mb-[200px]">
            INTERESTED IN WORKING WITH US?
          </h2>
          <h2 className="text-[16px] lg:text-[25px] uppercase text-white tracking-wider">
            EMAIL
          </h2>
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
    </div>
  );
};

export default Email;
