import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/ProfilePic.jpg";

import { delay, motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,

    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-5xl sm:text-6xl lg:text-8xl font-thin tracking-tight lg:mt-16"
            >
              Akshay Rana
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-3xl sm:text-4xl tracking-tight"
            >
              Web Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 py-6 font-light tracking-tighter max-w-xl text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center ">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-xl w-72 sm:w-80 lg:w-96 filter brightness-90 shadow-lg "
              src={profilePic}
              alt="Akshay Rana"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
