import React from "react";
import img from "../assets/home.jpg";
import { skills } from "../data/skills";
import Skill from "../components/reusable/Skill";

const About = () => {
  return (
    <div className="w-11/12 mx-auto min-h-content my-12 bg-slate-900">
      <div className="flex flex-col justify-center items-center gap-x-10 mt-[150px]">
        <p className="text-[3rem] font-bold text-center uppercase mt-6">About</p>
        <div className="h-[2px] w-[40%] bg-slate-600 mx-auto my-4"></div>
        <div className="flex justify-center items-center gap-x-4 my-[5rem]">
          <div className="w-[50%]">
            <img
              src={img}
              alt="about-img"
              className="w-[250px] mx-auto rounded-md my-5"
            />

            <p className="text-center text-2xl font-bold uppercase my-3">
              About Me
            </p>
            <p className="w-11/12 mx-auto text-center text-md font-semibold mt-4">
              I am a{" "}
              <span className="text-blue-600">Full Stack Web Developer</span>{" "}
              from Vadodara, Gujarat, India. I have good experience working with
              it. I have serious passion to create something that <span className="text-green-600">solves a
              problem and involves technology.</span>
            </p>            
          </div>

          <div className="w-[40%] flex flex-col justify-center items-center gap-y-3">
            {skills.map((skill, index) => {
              return <Skill skill={skill} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
