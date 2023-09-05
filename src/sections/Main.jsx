import React from "react";
import Image from "/images/zimo.png";
import ZimoGroup from "/images/zimoGroupDark.png";
import Arrow from "/images/ArrowDark.png";
import { motion } from "framer-motion";
import { fadeIn, fadeInn } from "../utils/motion";

const Main = () => {
  return (
    <div className="section">
    <div className=" container mx-auto h-screen flex justify-between flex-col relative ">
      <img
        src={Image}
        alt=""
        className="sm:w-[800px] sm:h-[200px] w-[1600px] h-[488px] absolute -translate-x-[50%] -translate-y-[50%] top-[50%] bottom-[50%] right-[50%] left-[50%] blur-lg"
      />
      <motion.div
            variants={fadeInn('right', 'spring', 0.5, 1)}
            initial="hidden"
            whileInView="show"
            exit="hidden"

        className=" my-auto gap-y-8 px-20 pt-28 sm:p-0 "
      >
        <img src={ZimoGroup} alt="" className="md:w-[380px] w-[420px] pl-4" />
      </motion.div>
      <div className="arrow space-y-14 flex flex-col items-center justify-center sm:absolute sm:bottom-0 sm:right-0 sm:left-0 pb-8">
        <a className="navigate">
          <img
            src={Arrow}
            alt="arrow-dark"
            height={80}
            width={40}
            className="cursor-pointer hover:scale-150 animate-bounce hover:animate-ping "
          />
        </a>
      </div>
    </div>
    </div>
  );
};

export default Main;
