import React from "react";
import { navLinks } from "../../data/navlinks";
import { Link } from "react-router-dom";
import * as AiOutline from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="border-b-2 border-b-slate-600  bg-slate-600" id="home">
      <div className="w-11/12 mx-auto h-[40px] flex justify-between items-center">
        <div>
          <a href="#" className="text-2xl">
            <span>Jaydeep</span>
            <span className="font-bold text-blue-700">Bariya</span>
          </a>
        </div>

        <ul className="flex justify-center items-center gap-x-8">
            <li><a href="#">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="bg-slate-500 text-slate-900 rounded-lg px-3 py-1 transition-all duration-200 hover:scale-105 active:shadow-sm active:shadow-slate-400">
          <a href="Jaydeep_Bariya_CV.pdf" download="Jaydeep_Bariya_CV.pdf">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
