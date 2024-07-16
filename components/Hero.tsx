import React from "react";
import TypeWriteEffect from "./Helper/TypeWriteEffect";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Hero = () => {
  return (
    <div
      id="home"
      className="w-[100vw] pt-[4vh] md:pt-[12vh] h-[85vh] md:h-[100vh] custom-bg"
    >
      <div className="flex justify-center flex-col w-[80%] h-[100%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center">
          <div>
            <h1 data-aos="fade-right" className="text-[#c4cfde] mb-[1.3rem]">
              WELCOME TO MY WEBSITE
            </h1>
            <div
              data-aos="fade-left"
              data-aos-delay="35"
              className="flex flex-row"
            >
              <div className="hidden md:block relative w-[140px] h-[110px] rounded-full">
                <Image
                  src="/images/perfilOsc.png"
                  alt="hero"
                  layout="fill"
                  objectFit="cover"
                  className="object-contain rounded-full opacity-95"
                />
              </div>
              <div>
                <h1 className="xl:text-[40px] lg:text-[40px] sm:text-[35px] text-[25px] font-semibold leading-[2.6rem] text-white">
                  Hi, I&apos;m <span className="text-teal-600">Pablo Dev</span>
                </h1>
                <TypeWriteEffect />
              </div>
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="70"
              className="mt-[1.2rem] text-[15px] md:text-[17px] text-[#c4cfde]"
            >
              I am a self-taught web programmer passionate about programming. I
              enjoy learning and creating innovative applications, always
              looking to improve my skills and keep up to date with the latest
              technologies and trends in web development.
            </p>
            <div className="mt-[2rem] flex items-center space-x-7">
              <a href="mailto:tonyp2hoy@gmail.com">
                <button
                  data-aos="zoom-in"
                  data-aos-delay="105"
                  className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56"
                >
                  <span className="relative z-10 flex items-center">
                    Hire me!
                    <AiOutlineMail className="ml-2" size={"20px"} />
                  </span>
                </button>
              </a>
              {/* <a href="">
                <button
                  data-aos="zoom-out"
                  data-aos-delay="1600"
                  className="before:ease relative h-12 w-40 overflow-hidden bg-orange-600 text-white font-semibold shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-20 before:w-20 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-green-700 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180"
                >
                  <span className="relative z-10">Download CV</span>
                </button>
              </a> */}
              <div
                data-aos="zoom-in"
                data-aos-delay="145"
                className=" ml-50 h-[45px] w-[110px] flex flex-row justify-between"
              >
                <a
                  href="https://github.com/pablex72"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub color="white" title="Github" size={"45px"} />
                </a>
                <a
                  href="https://www.linkedin.com/in/pablo-mejillone-98b07425a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin color="white" size={"45px"} />
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="175"
            className="flex flex-row items-center"
          >
            <div className="hidden md:block w-[650px] h-[350px] relative items-center">
              <Image
                src="/images/desktop.png"
                alt="hero"
                layout="fill"
                objectFit="cover"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
