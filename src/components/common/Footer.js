import React from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import {MdEmail} from 'react-icons/md';

const Footer = () => {
  return (
    <div className="w-full h-[200px] bg-slate-600 text-slate-200 flex justify-around items-center font-lg gap-x-4 relative">
      <a href="#home" className="absolute left-[20%] -top-[5%]">
        <BsFillArrowUpSquareFill size={35} />
      </a>

      <div className="flex flex-col justify-center items-center">
        <ul className="flex justify-start items-center gap-x-4 my-4">
          <li className="transition-all duration-200 hover:scale-95 hover:opacity-75">
            <a href="http://www.linkedin.com/in/jaydeepbariya" target="_blank">
              <AiFillLinkedin size={40} />
            </a>
          </li>
          <li className="transition-all duration-200 hover:scale-95 hover:opacity-75">
            <a href="http://www.instagram.com/jsbariya5" target="_blank">
              <AiFillInstagram size={40} />
            </a>
          </li>
          <li className="transition-all duration-200 hover:scale-95 hover:opacity-75">
            <a href="http://www.twitter.com/jsbariya5" target="_blank">
              <AiFillTwitterSquare size={40} />
            </a>
          </li>
          <li className="transition-all duration-200 hover:scale-95 hover:opacity-75">
            <a href="mailto:jaydeepbariya59@gmail.com" target="_blank">
              <MdEmail size={40} />
            </a>
          </li>
        </ul>

        <p className="uppercase font-semibold text-xl mt-5">Jaydeep Bariya &copy; <span className="text-red-500">2023</span></p>
      </div>
    </div>
  );
};

export default Footer;
