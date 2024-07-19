import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiJavascript, SiPython, SiDjango, SiFigma, SiCss3, SiHtml5 } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Sakthish</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        “You are a computer. If you become front-end you'll count the likes on social media. If you become back-end you'll be breathing deep on a mountain. Listen! one life man. Become a Full-stack.”
        </p>
      </div>
      <div className="flex flex-col gap-6">
  <div>
    <h2 className="text-base uppercase font-titleFont mb-4">
      Find me in
    </h2>
    <div className="flex gap-4">
      <a href="https://www.facebook.com/sakthish.duke?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="bannerIcon">
        <FaFacebookF />
      </a>
      <a href="https://x.com/Sakthish63?t=5a_2Pu-o0wMZ5KvJkVVLfw&s=09" target="_blank" rel="noopener noreferrer" className="bannerIcon">
        <FaTwitter />
      </a>
      <a href="https://www.linkedin.com/in/sakthish-s-9a0089241" target="_blank" rel="noopener noreferrer" className="bannerIcon">
        <FaLinkedinIn />
      </a>
      <a href="https://github.com/sakthi637" target="_blank" rel="noopener noreferrer" className="bannerIcon">
        <FaGithub />
      </a>
    </div>
  </div>

        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiPython />
            </span>         
            <span className="bannerIcon">
              <SiDjango />
            </span>
            <span className="bannerIcon">
              <SiHtml5 />
            </span>
            <span className="bannerIcon">
              <SiCss3 />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner