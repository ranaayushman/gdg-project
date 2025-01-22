import Image from "next/image";
import React from "react";
import MaxWidthWrapper from "../hooks/MaxWidthWrapper";
import { Button } from "@/components/ui/button";


const About = () => {
  return (
    <section id="about" className="relative w-full py-12 md:py-16 lg:py-20 bg-opacity-90">
    
      <MaxWidthWrapper className="w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center p-4">
          {/* Image Section */}
          <div className="w-full order-2 md:order-1">
            <div className="relative bg-white/20 dark:bg-darkgray/20 backdrop-blur-lg p-2 rounded-lg shadow-2xl border border-white/30 dark:border-darkgray/30">
              <Image
                className="w-full h-auto object-cover rounded-lg"
                height={500}
                width={600}
                src="/img/team.png"
                alt="People collaborating and building blocks"
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full space-y-6 order-1 md:order-2">
            <div className="bg-white/80 dark:bg-darkgray/80 backdrop-blur-lg p-6 md:p-8 rounded-lg shadow-2xl border border-white/30 dark:border-darkgray/30">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About Us
              </h1>

              <p className="text-sm md:text-base text-gray-800 dark:text-gray-300 leading-relaxed mb-8">
                At GDG On Campus Haldia Institute of Technology, we uphold the
                principles of excellence. We believe in cultivating a culture that
                values learning, creativity, and teamwork. Our chapter fosters inclusivity
                and diversity, where every unique perspective enriches our collective endeavors.
              </p>

              <div className="flex justify-start">
                <Button 
                  className="bg-blue-500 hover:bg-blue-600 text-white sm:text-md 
                            max-md:px-16 rounded-sm w-1/4 md:w-40 h-10 
                            transition-transform transform hover:scale-105"
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default About;
