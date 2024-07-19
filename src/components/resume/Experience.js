import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-6">
          <p className="text-sm text-designColor tracking-[4px]">2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="FullStack Developer"
            subTitle="TALROP(Steyp) - (May, 01, 2024 - Oct, 30, 2024)"
            result="TALROP - Kerala"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Product Developer"
            subTitle="OneYes Infotec Solutions - (Jan, 03, 2024 - Mar, 30, 2024)"
            result="ONEYES - Chennai"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Business Development Associate - BDA"
            subTitle="SkillIntern - (Apr, 01, 2024 - Apr, 30, 2024)"
            result="SKILLINTERN - Hosur"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
