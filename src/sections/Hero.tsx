"use client";

import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "../hooks/MaxWidthWrapper";
import { motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa";
import Background from "@/components/ui/Background";

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-white dark:bg-darkgray">
{/*   
<Background /> */}
      <MaxWidthWrapper className="relative z-10 min-h-[100dvh] flex items-center">
        <div className="w-full flex flex-col justify-center items-center lg:items-start py-8 px-6 sm:px-8 lg:px-12">
          {/* Icon Section */}
          <motion.div
            className="w-16 h-16 mb-8 flex justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-2xl hover:scale-110 transform transition-all duration-300 perspective-1000 hover:rotate-y-12"
            initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <FaGoogle className="text-white text-4xl" />
          </motion.div>

          {/* Hero Content */}
          <motion.div
            className="max-w-xl lg:max-w-3xl text-center lg:text-left shadow-2xl rounded-lg p-8 bg-opacity-90 bg-white dark:bg-darkgray border border-gray-100 dark:border-gray-800 relative overflow-hidden"
            initial={{ opacity: 0, y: 30, rotateX: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20 dark:from-darkgray/10 dark:to-transparent opacity-50 -z-10" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
              Google Developer Group HIT
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-800 dark:text-gray-200 mb-8 leading-relaxed">
              Google Developer Student Groups are university-based community
              groups for students interested in Google developer technologies.
              By joining a GDG On Campus, students grow their knowledge in a
              peer-to-peer learning environment and build solutions for local
              businesses and their community.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="w-full lg:w-auto mt-6"
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 text-base lg:text-lg rounded-md shadow-2xl transition-all duration-300 transform hover:scale-105 min-w-[160px] sm:min-w-[200px]">
              Learn More
            </Button>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
