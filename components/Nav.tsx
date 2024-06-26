import { Bars3BottomLeftIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props{
    openNav: ()=> void
}

const Nav = ( {openNav}:Props ) => {
  return (
    <div className="fixed w-[100%] z-[1000] bg-gray-800">
      <div className="flex items-center h-[12vh] justify-between  w-[80%] mx-auto">
        <div className="font-logo text-white text-[18px]">
          <span className="text-[30px] md:text-[40px] text-yellow-400">pd</span>
          Pablo-Dev
        </div>
        <ul className="md:flex hidden items-center space-x-10">
          <li>
            <a className="nav__link" href="#">Home</a>
          </li>
          <li>
            <a className="nav__link" href="#">About</a>
          </li>
          <li>
            <a className="nav__link" href="#">Services</a>
          </li>
          <li>
            <a className="nav__link" href="#">Blog</a>
          </li>
          <li>
            <a className="nav__link" href="#">Contact</a>
          </li>
        </ul>
        <Bars3BottomLeftIcon onClick={openNav} className="w-[2.3rem] md:hidden h-[2.3rem] text-white rotate-180"/>
      </div>
    </div>
  );
};

export default Nav;
