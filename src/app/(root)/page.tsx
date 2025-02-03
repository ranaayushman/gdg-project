import About from "@/sections/About";
import Events from "@/sections/Events";
import Hero from "@/sections/Hero";
import Members from "@/sections/Members";
import TestimonialsSection from "@/sections/Testimonials";
import Background from "@/components/ui/Background";
import React from "react";

const LandingPage = () => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-darkgray">
      <Background />  {/* Background applied globally */}
      
      <Hero />
      <section id="about">
  <About />
</section>
      <Members />
      <Events />
      <section id="testimonials">
  <TestimonialsSection />
</section>
    </div>
  );
};

export default LandingPage;
