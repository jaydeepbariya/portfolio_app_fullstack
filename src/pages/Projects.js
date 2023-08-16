import React from "react";
import projectImg1 from "../assets/project.png";
import html from "../assets/tech_logos/html.png";
import css from "../assets/tech_logos/css.png";
import javascript from "../assets/tech_logos/javascript.png";
import tailwind from "../assets/tech_logos/tailwind.webp";
import react from "../assets/tech_logos/react.png";
import nodejs from "../assets/tech_logos/nodejs.jpg";
import express from "../assets/tech_logos/expressjs.png";
import mongodb from "../assets/tech_logos/mongodb.png";

const Projects = () => {
  return (
    <div className="w-11/12 mx-auto min-h-content my-12 bg-slate-900">
      <div className="flex flex-col justify-center items-center gap-x-10 mt-[150px]">
        <p className="text-[3rem] font-bold uppercase mt-6">Projects</p>
        <div className="h-[2px] w-[40%] bg-slate-700 my-4"></div>

        <div className="w-full flex flex-col justify-start py-6 relative group my-5">
          <img
            src={projectImg1}
            alt="Project Image 1"
            className="w-[70%] h-[450px] flex justify-start ml-[10%] border-slate-400 border-spacing-2 border-[2px]"
          />

          <div className="w-[70%] h-[450px] flex justify-around items-center absolute top-0 left-0 opacity-0 ml-[10%] mt-6 transition-all duration-200 group-hover:opacity-100 group-hover:bg-opacity-50 group-hover:bg-slate-700">
            <div className="flex flex-col">
              <p className="text-left text-[150px] font-bold absolute -top-20 -left-10">
                1
              </p>
              <p className="text-3xl font-bold mt-5">StudyNotion</p>
              <p className="text-md font-semibold my-3">
                EdTech Full Stack Application
              </p>
              <a
                href="https://www.github.com/jaydeepbariya"
                target="_blank"
                className="px-2 py-1 rounded-md transition-all duration-200 bg-slate-900 text-slate-200 hover:scale-95"
              >
                Explore SourceCode
              </a>
            </div>
            <div className="w-[40%] h-[50%] grid grid-cols-3 grid-rows-2 gap-y-4 gap-x-2 group-hover:opacity-100">
              <img src={html} alt="Tech Logo 1" width={50} height={50} />
              <img src={css} alt="Tech Logo 2" width={50} height={50} />
              <img src={javascript} alt="Tech Logo 3" width={50} height={50} />
              <img src={tailwind} alt="Tech Logo 4" width={50} height={50} />
              <img src={react} alt="Tech Logo 5" width={50} height={50} />
              <img src={nodejs} alt="Tech Logo 6" width={50} height={50} />
              <img src={express} alt="Tech Logo 7" width={50} height={50} />
              <img src={mongodb} alt="Tech Logo 8" width={50} height={50} />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-start py-6 relative group  my-5">
          <img
            src={projectImg1}
            alt="Project Image 1"
            className="w-[70%] h-[450px] flex justify-start ml-[15%] border-slate-400 border-spacing-2 border-[2px] relative"
          />

          <div className="w-[70%] h-[450px] flex justify-around items-center absolute top-0 left-0 opacity-0 ml-[15%] mt-6 transition-all duration-200 group-hover:opacity-100 group-hover:bg-opacity-50 group-hover:bg-slate-700">
            <div className="flex flex-col">
              <p className="text-left text-[150px] font-bold absolute -top-20 -right-10">
                2
              </p>
              <p className="text-3xl font-bold mt-5">StudyNotion</p>
              <p className="text-md font-semibold my-3">
                EdTech Full Stack Application
              </p>
              <a
                href="https://www.github.com/jaydeepbariya"
                target="_blank"
                className="px-2 py-1 rounded-md transition-all duration-200 bg-slate-900 text-slate-200 hover:scale-95"
              >
                Explore SourceCode
              </a>
            </div>
            <div className="w-[40%] h-[50%] grid grid-cols-3 grid-rows-2 gap-y-4 gap-x-2">
              <img src={html} alt="Tech Logo 1" width={50} height={50} />
              <img src={css} alt="Tech Logo 2" width={50} height={50} />
              <img src={javascript} alt="Tech Logo 3" width={50} height={50} />
              <img src={tailwind} alt="Tech Logo 4" width={50} height={50} />
              <img src={react} alt="Tech Logo 5" width={50} height={50} />
              <img src={nodejs} alt="Tech Logo 6" width={50} height={50} />
              <img src={express} alt="Tech Logo 7" width={50} height={50} />
              <img src={mongodb} alt="Tech Logo 8" width={50} height={50} />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-start py-6 relative group  my-5">
          <img
            src={projectImg1}
            alt="Project Image 1"
            className="w-[70%] h-[450px] flex justify-start ml-[10%] border-slate-400 border-spacing-2 border-[2px] relative"
          />

          <div className="w-[70%] h-[450px] flex justify-around items-center absolute top-0 left-0 opacity-0 ml-[10%] mt-6 transition-all duration-200 group-hover:opacity-100 group-hover:bg-opacity-50 group-hover:bg-slate-700">
            <div className="flex flex-col">
              <p className="text-left text-[150px] font-bold absolute -top-20 -left-10">3</p>
              <p className="text-3xl font-bold mt-5">StudyNotion</p>
              <p className="text-md font-semibold my-3">
                EdTech Full Stack Application
              </p>
              <a
                href="https://www.github.com/jaydeepbariya"
                target="_blank"
                className="px-2 py-1 rounded-md transition-all duration-200 bg-slate-900 text-slate-200 hover:scale-95"
              >
                Explore SourceCode
              </a>
            </div>
            <div className="w-[40%] h-[50%] grid grid-cols-3 grid-rows-2 gap-y-4 gap-x-2">
              <img src={html} alt="Tech Logo 1" width={50} height={50} />
              <img src={css} alt="Tech Logo 2" width={50} height={50} />
              <img src={javascript} alt="Tech Logo 3" width={50} height={50} />
              <img src={tailwind} alt="Tech Logo 4" width={50} height={50} />
              <img src={react} alt="Tech Logo 5" width={50} height={50} />
              <img src={nodejs} alt="Tech Logo 6" width={50} height={50} />
              <img src={express} alt="Tech Logo 7" width={50} height={50} />
              <img src={mongodb} alt="Tech Logo 8" width={50} height={50} />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-start py-6 relative group my-5">
          <img
            src={projectImg1}
            alt="Project Image 1"
            className="w-[70%] h-[450px] flex justify-start ml-[15%] border-slate-400 border-spacing-2 border-[2px] relative"
          />

          <div className="w-[70%] h-[450px] flex justify-around items-center absolute top-0 left-0 opacity-0 ml-[15%] mt-6 transition-all duration-200 group-hover:opacity-100 group-hover:bg-opacity-50 group-hover:bg-slate-700">
            <div className="flex flex-col">
              <p className="text-left text-[150px] font-bold absolute -top-20 -right-10">4</p>
              <p className="text-3xl font-bold mt-5">StudyNotion</p>
              <p className="text-md font-semibold my-3">
                EdTech Full Stack Application
              </p>
              <a
                href="https://www.github.com/jaydeepbariya"
                target="_blank"
                className="px-2 py-1 rounded-md transition-all duration-200 bg-slate-900 text-slate-200 hover:scale-95"
              >
                Explore SourceCode
              </a>
            </div>
            <div className="w-[40%] h-[50%] grid grid-cols-3 grid-rows-2 gap-y-4 gap-x-2">
              <img src={html} alt="Tech Logo 1" width={50} height={50} />
              <img src={css} alt="Tech Logo 2" width={50} height={50} />
              <img src={javascript} alt="Tech Logo 3" width={50} height={50} />
              <img src={tailwind} alt="Tech Logo 4" width={50} height={50} />
              <img src={react} alt="Tech Logo 5" width={50} height={50} />
              <img src={nodejs} alt="Tech Logo 6" width={50} height={50} />
              <img src={express} alt="Tech Logo 7" width={50} height={50} />
              <img src={mongodb} alt="Tech Logo 8" width={50} height={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
