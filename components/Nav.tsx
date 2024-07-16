import { Bars3BottomLeftIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const [navSticky, setNavSticky] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavSticky(true);
      }
      if (window.scrollY <= 90) {
        setNavSticky(false);
      }
    };
    window.addEventListener("scroll", handler);
  }, []);
  const stickyStyle = navSticky ? "bg-[#212428] shadow-gray-900 shadow-sm" : "";
  return (
    <div
      className={`fixed w-[100%] ${stickyStyle} transition-all duration-300 z-[1000]`}
    >
      <div className="flex items-center h-[12vh] justify-between  w-[80%] mx-auto">
        <a href="#home">
          <div className="font-logo flex flex-row justify-center items-center text-white text-[18px] gap-5">
            <Image
              width={50}
              height={50}
              src={"/images/logo.png"}
              alt="footer-icono"
            />
            Pablo - Dev
          </div>
        </a>
        <ul className="md:flex hidden items-center space-x-10">
          <li>
            <a className="nav__link" href="#home">
              Welcome
            </a>
          </li>
          <li>
            <a className="nav__link" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="nav__link" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="nav__link" href="#project">
              Projects
            </a>
          </li>
          <li>
            <a className="nav__link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <Bars3BottomLeftIcon
          onClick={openNav}
          className="w-[2.3rem] md:hidden h-[2.3rem] text-white rotate-180"
        />
      </div>
    </div>
  );
};

export default Nav;
