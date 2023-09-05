import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./../utils/motion";
import Terms from "./Terms";

const ThankYou = () => {
  const imageAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 4 } },
  };
  return (
    <div className="section" id="section12" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
      <div className="container mx-auto flex flex-col h-screen items-center justify-center">
        <div className="">
          <motion.img
            src="/images/thankyou.svg"
            className="h-[40px] block mx-auto"
            alt=""
            initial="hidden"
            whileInView="visible"
            variants={imageAnimation}
          />
        </div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        exit="hidden"
      >
        <img
          src="/images/zimo-logo-2.png"
          className="h-[30px]  mx-auto"
          alt=""
        />
        <div className="mt-8 flex justify-center items-center text-center gap-4 font-normal md:gap-8 text-[10px] uppercase tracking-widest pb-12">
          <button>TERMS OF SERVICE</button>
          <p>© ZIMO GROUP 2023</p>
          <button>PRIVACY POLICY</button>
        </div>
      </motion.div>
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
};

export default ThankYou;
