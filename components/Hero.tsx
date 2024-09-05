import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";

const Hero = () => {
  return (
    <div className="relative pb-20 pt-36 flex flex-col lg:flex-row items-center justify-between">
      <div className="absolute inset-0">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]" />

      <div className="relative w-full max-w-[1200px] mx-auto z-10 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
        <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
          <p className="uppercase tracking-widest text-xs text-blue-100">
            Dynamic Web Magic with Next.js
          </p>
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center lg:text-left text-[32px] md:text-4xl lg:text-5xl xl:text-6xl"
          />
          <p className="text-center lg:text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Ndenwa Elijah, a Next.js Developer based in Nigeria.
          </p>
          <div className="flex justify-center lg:justify-start">
            <a href="#about">
              <MagicButton
                title="View my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center p-4 sm:p-6 border rounded-xl dark:border-gray-700">
          <img
            src="/elijah-img.png"
            alt="Hero Image"
            className="object-cover w-full rounded-xl aspect-square"
          />
          <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white text-center lg:text-left">
            Ndenwa Elijah
          </h1>
          <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 text-center lg:text-left">
            Next.js Developer
          </p>
          <div className="flex mt-3 -mx-2 justify-center lg:justify-start">
            <a
              href="#"
              className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="LinkedIn"
            >
              {/* Add social media icons */}
            </a>
            <a
              href="#"
              className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="GitHub"
            >
              {/* Add social media icons */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
