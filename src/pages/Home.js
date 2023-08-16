import React from "react";
import { TypeAnimation } from "react-type-animation";
import { MdEmail } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

import logo from "../assets/home.jpg";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto min-h-screen scroll-smooth">
      <div className="flex justify-center items-center gap-x-10 my-[150px]">
        <div className="w-[50%] flex flex-col gap-y-2">
          <p className="text-xl text-slate-400">Hi There, I'm</p>
          <p className="text-4xl text-slate-100 font-bold">Jaydeep Bariya</p>
          <p className="text-xl">I am a</p>
          <TypeAnimation
            sequence={[
              "JavaScript Developer",
              1000,
              "ReactJS Developer",
              1000,
              "MERN Stack Developer",
              1000,
              "Full Stack Web Developer",
              1000,
            ]}
            speed={40}
            style={{
              fontSize: "2em",
              display: "inline-block",
              color: "skyblue",
            }}
            repeat={Infinity}
          />
          <ul className="flex justify-start items-center gap-x-4 my-4">
            <li className="transition-all duration-200 hover:scale-95 hover:opacity-75">
              <a
                href="http://www.linkedin.com/in/jaydeepbariya"
                target="_blank"
              >
                <AiFillLinkedin size={25} />
              </a>
            </li>
            <li className="transition-all duration-200 hover:scale-95 hover:opacity-75">
              <a href="http://www.instagram.com/jsbariya5" target="_blank">
                <AiFillInstagram size={25} />
              </a>
            </li>
            <li className="transition-all duration-200 hover:scale-95 hover:opacity-75">
              <a href="http://www.twitter.com/jsbariya5" target="_blank">
                <AiFillTwitterSquare size={25} />
              </a>
            </li>
            <li className="transition-all duration-200 hover:scale-95 hover:opacity-75">
              <a href="mailto:jaydeepbariya59@gmail.com" target="_blank">
                <MdEmail size={25} />
              </a>
            </li>
          </ul>

          <div className="flex gap-x-5">
            <a
              href="Jaydeep_Bariya_CV.pdf"
              download="Jaydeep_Bariya_CV.pdf"
              className="bg-slate-500 text-slate-900 rounded-lg px-3 py-1 transition-all duration-200 hover:scale-95 active:shadow-sm active:shadow-slate-400"
            >
              Download CV
            </a>
            <a
              href="#about"
              className="bg-slate-500 text-slate-900 rounded-lg px-3 py-1 transition-all duration-200 hover:scale-95 active:shadow-sm active:shadow-slate-400"
            >
              About Me
            </a>
          </div>
        </div>

        <div className="w-[30%]">
          <img src={logo} alt="Home Image" className="w-[300px] rounded-full" />
        </div>
      </div>

      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>

    </div>
  );
};

export default Home;
