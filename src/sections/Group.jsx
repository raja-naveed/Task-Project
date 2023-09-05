import React from "react";
import Services from "/images/services.png";
import ZimoGroup from "/images/zimo-group.png";
import { motion } from "framer-motion";
const Group = () => {
  const zoomInAnimation = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 1 } },
  };
  return (
    <div className="section bg-black relative">
      <div className="container mx-auto min-h-screen py-8 relative h-[80vh] overflow-hidden">
        <motion.div
          variants={zoomInAnimation}
          initial="initial"
          whileInView="animate"
          className="services"
        >
          <img src={Services} alt="" />
        </motion.div>
        <img
          src="/images/zimo-group.png"
          alt=""
          class="absolute blur-sm lg:blur-md "
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
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

export default Group;
