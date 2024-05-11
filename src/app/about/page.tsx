"use client";
import SkillCard from "@/components/ui/SkillCard";
import Image from "next/image";
import img from "../../../public/profile_image.jpeg";
import { skillData } from "@/lib/data";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const About = () => {
  const words = [
    {
      text: "Know ",
      className:
        "text-3xl sm:text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 max-w-72 md:max-w-none leading-tight",
    },
    {
      text: `About `,
      className:
        "text-3xl sm:text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 max-w-72 md:max-w-none leading-tight",
    },
    {
      text: "Me.",
      className:
        "text-blue-500 dark:text-blue-500 text-4xl sm:text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 max-w-72 md:max-w-none leading-tight",
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center gap-10 dark:bg-dot-white/[0.16]">
      <motion.div
        className="absolute top-0 left-0 w-full h-lvh bg-black z-20 origin-left transform"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="absolute top-0 left-0 w-full h-lvh bg-black z-20 origin-top transform"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
      ;
      <div className="md:w-[90%] xl:w-[70%] px-4 md:px-0 my-20 md:my-32">
        <div className="flex md:justify-between">
          <div className="space-y-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight">
              <TypewriterEffectSmooth words={words} />
            </h1>
            <div className="space-y-4">
              <p className="md:max-w-xl xl:max-w-2xl text-neutral-200 md:pr-4">
                Dynamic web developer with one year of experience delivering
                exceptional results. Proficient in React , Express and
                JavaScript, with a track record of creating 10+ responsive
                websites. Implemented server-side functionality using Node.js
                and MongoDB, resulting in a 20% improvement in website
                performance. Utilized React.js and Angular.js to enhance user
                engagement, leading to a 30% increase in site interactions.
                Collaborative team player with expertise in Git and GitHub,
                ensuring efficient project management and timely delivery of 5+
                successful projects.
              </p>
              <HoverBorderGradient
                containerClassName="rounded-xl"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2 w-28"
              >
                <Link href="/projects">Projects</Link>
              </HoverBorderGradient>
            </div>
          </div>
          <figure className="hidden md:block">
            <Image
              src={img}
              alt="Profile pic"
              className="size-80 m-auto ease-out hover:ease-in hover:shadow-2xl hover:shadow-cyan-900/100 rounded-full grayscale cursor-pointer hover:grayscale-0 transform hover:scale-105 transition-transform duration-300 object-cover"
            />
          </figure>
        </div>
        <div className="my-20">
          <h2 className="text-4xl font-bold my-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight">
            What I Know
          </h2>
          <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-5">
            {skillData.map((item) => {
              // Filter out undefined values from the skills array and convert them to strings
              const filteredSkills = item.skills.filter(
                (skill) => typeof skill === "string"
              ) as string[];

              return (
                <SkillCard
                  key={item.title}
                  data={{ ...item, skills: filteredSkills }}
                />
              );
            })}
          </div>
        </div>
        <div className="space-y-10 w-[85vw] md:w-[70vw]">
          <h2 className="text-4xl font-bold my-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight">
            Coding Days
          </h2>
          <GitHubCalendar
            username="NikhilRaj060"
            theme={{
              dark: ["rgb(38, 38, 38)", "rgb(156,163,175)"],
            }}
            blockMargin={5}
            fontSize={16}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
