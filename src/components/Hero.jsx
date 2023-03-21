import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        {/* Garis kiri Start */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-violet-600 to-slate-900" />
        </div>
        {/* Garis kiri End */}

        {/* Name & Tagline / Profession Start */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Shufi</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Programmer, Motion Designer <br className="sm:block hidden" /> & Video Editor
          </p>
        </div>
        {/* Name & Tagline / Profession End */}
      </div>

      {/* 3D Computer Canvas Start*/}
      <ComputersCanvas />
      {/* 3D Computer Canvas End*/}
    </section>
  );
};

export default Hero;
