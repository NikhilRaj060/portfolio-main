"use client";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const words = [
  {
    text: "Hi ",
    className:
      "text-3xl sm:text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 max-w-72 md:max-w-none leading-tight",
  },
  {
    text: `I'am `,
    className:
      "text-3xl sm:text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 max-w-72 md:max-w-none leading-tight",
  },
  {
    text: "Nikhil Raj.",
    className:
      "text-blue-500 dark:text-blue-500 text-4xl sm:text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 max-w-72 md:max-w-none leading-tight",
  },
];

export default function Home() {
  return (
    <div className="h-lvh w-full rounded-md flex md:items-center md:justify-center antialiased relative overflow-hidden dark:bg-grid-white/[0.07] justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]" />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-28 md:pt-0 flex flex-col items-center">
        <h1 className="text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 max-w-72 md:max-w-none leading-tight">
          <TypewriterEffectSmooth words={words} />
        </h1>
        <p className="mt-10 font-normal text-base md:text-xl text-neutral-400 max-w-72 md:max-w-3xl text-center mx-auto">
          Innovative and dedicated Software Engineer with a strong focus on
          frontend development. Leveraging a Bachelor's degree in Computer
          Science from Sambhram Institute of Technology, Bangalore (VTU) in
          2023, I bring a blend of technical expertise and creative
          problem-solving skills to every project. Currently contributing to the
          success of Prospecta Software since joining in February 2023, I
          specialize in crafting intuitive and responsive user interfaces using
          cutting-edge technologies such as React, Angular, and JavaScript. With
          a solid foundation in Java and Spring Boot, I excel in delivering
          scalable and efficient web applications that meet and exceed client
          expectations.
        </p>
        <div className="mt-10 flex gap-4 items-center">
          <Button
            asChild
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <Link
              href="https://drive.google.com/file/d/1JiNkedikbCyrRq9z2gQCabZwvQxA3INC/view?usp=sharing"
              target="_blank"
            >
              Resume
            </Link>
          </Button>
          <Link href="about">
            <HoverBorderGradient
              containerClassName="rounded-md"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <span className="flex items-center">About Me</span>
            </HoverBorderGradient>
          </Link>
        </div>
      </div>
    </div>
  );
}
