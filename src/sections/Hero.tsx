import { Button } from "@/components/ui/button";
import Image from "next/image";
import MaxWidthWrapper from "./mmw";
import ImageFrame from "@/components/ui/ImageFrame";

const Hero = () => {
  return (
    <section className="bg-white dark:bg-darkgray min-h-screen max-md:bg-none bg-[url('/img/peoples.png')] bg-no-repeat bg-contain">
      <MaxWidthWrapper className="h-full flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col gap-y-6 md:gap-y-10 w-full md:w-1/2 text-center md:text-left p-10 mt-14">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#4D4D4D] dark:text-headdark mb-4">
              Google Developer
              Groups HIT
            </h1>
            <p className="text-sm md:text-base text-[#717171] dark:text-[#C8E6C9] px-4 md:px-0">
              Google Developer Student Groups are university-based community
              groups for students interested in Google developer technologies.
              By joining a GDG On Campus, students grow their knowledge in a
              peer-to-peer learning environment and build solutions for local
              businesses and their community.
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <Button className="bg-[#2194F3] dark:bg-[#2194F3] hover:dark:bg-red-400  text-white rounded-sm w-2/4 md:w-1/4 h-10">
              Learn More
            </Button>
          </div>
        </div>
        <div className="max-w-xs md:max-w-none">
          <Image
            height={250}
            width={200}
            alt="GDG Light"
            src="/img/image1.png"
            className="mx-auto md:mx-0 dark:hidden"
            priority
          />
          <Image
            height={250}
            width={200}
            alt="GDG Dark"
            src="/img/image1dark.png"
            className="mx-auto md:mx-0 hidden dark:block"
            priority
          />
        </div>
        {/* <ImageFrame src="/img/peoples.png" alt="people" /> */}
      </MaxWidthWrapper>
     
    </section>
  );
};

export default Hero;
