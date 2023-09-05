import React from "react";
import Image from "/images/logo2-white.png";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
const Page = () => {
  return (
    <div className="bg-black section" id="section2">
      <div className=" h-screen flex flex-col justify-center items-center   relative text-white ">
        <div className="container mx-auto flex flex-col justify-center gap-8 xl:flex-row items-center min-h-screen py-16 relative">
          <motion.img
            variants={fadeIn("right", 0.01)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            src={Image}
            alt=""
            className="absolute left-0"
          />
          <motion.div 
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          className="text-center mx-auto text-[30px] tracking-wider aos-init aos-animate">
            <p>We are the global platform.</p>
            <p className="mt-3">
              Services in over one hundred and twenty countries.
            </p>
          </motion.div>
        </div>
        <a className="navigate">
          <img
            src="/images/down-arrow.png"
            alt="arrow-dark"
            height={80}
            width={40}
            className="cursor-pointer z-10 hover:scale-150 hover:brightness-100 animate-bounce hover:animate-ping"
            style={{ filter: 'brightness(0) invert(1)' }}          />
        </a>
      </div>
    </div>
  );
};

export default Page;
