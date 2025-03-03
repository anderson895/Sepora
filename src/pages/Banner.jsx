import React from "react";
import { slideInFromRight } from "../animation/motionConfig";
import { motion } from "framer-motion";
const Banner = () => {

  return (
    <div className="w-full bg-[#ff7e67] py-12">
      <div className="w-full px-6">
        <div className="w-full flex flex-col lg:flex-row justify-around items-center gap-10">
          {/* Left Column */}
          <div className="text-center lg:text-left">
            <div>
              <h1 className="text-5xl font-extrabold text-white leading-tight">
                Cosmetics
              </h1>
              <p className="text-5xl font-light text-gray-800 mt-4">
                in Our Store
              </p>
              <p className="text-lg text-gray-800 mt-4">The brands is goods.</p>
              <a
                href="#"
                className="mt-6 inline-block bg-transparent border-2 border-white text-gray-800 py-3 px-8 rounded-full font-bold hover:bg-white hover:text-yellow-500 transition"
              >
                BUY
              </a>
            </div>
          </div>

          {/* Right Column */}
          <motion.div
            className="relative"
            variants={slideInFromRight} 
            initial="hidden"
            whileInView="visible" 
            viewport={{ once: false, amount: 0.2 }}
          >
            <img
              src={"/sample11.jpg"}
              className="rounded-lg w-[700px] shadow-lg"
              alt="Banner"
            />
            <div className="absolute top-[-2rem] left-[-2rem] bg-white text-center flex items-center justify-center rounded-full shadow-lg w-36 h-36">
              <span className="text-xl font-bold text-gray-800">125₱</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
