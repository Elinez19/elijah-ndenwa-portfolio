"use client";

import Image from "next/image";
import Spotlight, { SpotlightCard } from "./ui/Spotlight-Card";

export default function SpotlightPage() {
  return (
    <>
      <main className="relative h-[650px] flex flex-col justify-center bg-slate-900 overflow-hidden" id="articles">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12">
          {/* Title and Description */}
          <header className="text-center mb-12">
            <h1 className="text-4xl text-slate-200 font-bold mb-2">Articles/Technical Writeups</h1>
            <p className="text-lg text-slate-400">
              I have written a variety of articles, ranging from the basics of frontend to advanced applications of frontend tools. Here are some examples of my work.
            </p>
          </header>

          <Spotlight className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group">
            {/* Card #1 */}
            <SpotlightCard>
              <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                {/* Radial gradient */}
                <div
                  className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                </div>
                <div className="flex flex-col h-full items-center text-center">
                  {/* Image */}
                  <div className="relative inline-flex">
                    <div
                      className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                      aria-hidden="true"
                    ></div>
                    <Image
                      className="inline-flex"
                      src="/card-01.jpg"
                      width={200}
                      height={200}
                      alt="Card 01"
                    />
                  </div>
                  {/* Text */}
                  <div className="grow mb-5">
                    <h2 className="text-xl text-slate-200 font-bold mb-1">
                      Tailwind CSS: The Magic Style Library
                    </h2>
                    <p className="text-sm text-slate-500">
                      Tailwind CSS is not just a styling library; it's a paradigm shift in how we approach front-end development...
                    </p>
                    <p className="text-xs text-slate-400">January 10, 2024</p>
                  </div>
                  <a
                    className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                    href="#0"
                  >
                    <span>View Article</span>
                  </a>
                </div>
              </div>
            </SpotlightCard>

            {/* Card #2 */}
            <SpotlightCard>
              <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                {/* Radial gradient */}
                <div
                  className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                </div>
                <div className="flex flex-col h-full items-center text-center">
                  {/* Image */}
                  <div className="relative inline-flex">
                    <div
                      className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                      aria-hidden="true"
                    ></div>
                    <Image
                      className="inline-flex"
                      src="/card-02.jpg"
                      width={200}
                      height={200}
                      alt="Card 02"
                    />
                  </div>
                  {/* Text */}
                  <div className="grow mb-5">
                    <h2 className="text-xl text-slate-200 font-bold mb-1">
                      Mastering React Components: Building Reusable and Well-Organized UIs
                    </h2>
                    <p className="text-sm text-slate-500">
                      React components are the building blocks of your user interface. They are reusable, self-contained pieces of code that...
                    </p>
                    <p className="text-xs text-slate-400">October 10, 2023</p>
                  </div>
                  <a
                    className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                    href="#0"
                  >
                    <span>View Article</span>
                  </a>
                </div>
              </div>
            </SpotlightCard>

            {/* Card #3 */}
            <SpotlightCard>
              <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                {/* Radial gradient */}
                <div
                  className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                </div>
                <div className="flex flex-col h-full items-center text-center">
                  {/* Image */}
                  <div className="relative inline-flex">
                    <div
                      className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                      aria-hidden="true"
                    ></div>
                    <Image
                      className="inline-flex"
                      src="/card-03.jpg"
                      width={200}
                      height={200}
                      alt="Card 03"
                    />
                  </div>
                  {/* Text */}
                  <div className="grow mb-5">
                    <h2 className="text-xl text-slate-200 font-bold mb-1">
                    Mastering React Components: Building Reusable and Well-Organized UIs
                    </h2>
                    <p className="text-sm text-slate-500"> React components are the building blocks of your user interface. They are reusable, self-contained pieces of code that...
                    </p>
                    <p className="text-xs text-slate-400">Date</p>
                  </div>
                  <a
                    className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                    href="#0"
                  >
                    <span>View Article</span>
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </Spotlight>
        </div>
      </main>
    </>
  );
}
