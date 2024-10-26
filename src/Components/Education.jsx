import React from "react";
import college from "../assets/Dev-Bhoomi-Logo.png";
import school from "../assets/School_logo.png";
import { COLLEGE, SCHOOL } from "../constants";
import { motion } from "framer-motion";

function Education() {
  return (
    <div>
      <div className="border-b border-neutral-900 pb-4 ">
        <h2 className="text-center text-4xl my-20">Education</h2>

        <div className="flex flex-wrap ">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 lg:p-8"
          >
            <div className="flex items-center justify-center">
              <img className="rounded-xl" src={college} alt="about" />
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <p className="my-2 pl-5 max-w-xl py-6 font-light">{COLLEGE}</p>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-wrap ">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex justify-center lg:justify-start">
              <p className="my-2 max-w-xl py-6 pl-6 mr-0 font-light">
                {SCHOOL}
              </p>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 lg:p-8">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center"
            >
              <img
                className="rounded-xl w-80  lg:w-80 "
                src={school}
                alt="about"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
