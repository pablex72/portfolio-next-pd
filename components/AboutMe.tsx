import { CheckIcon } from "@heroicons/react/16/solid";
import React from "react";

const AboutMe = () => {
  return (
    <div id="about" className="mt-[-4rem] bg-black pb-[3rem]">
      <div className="w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]">
        <div>
          <p className="heading__mini">About Me</p>
          <h1 className="heading__primary">
            Development of professional
            <span className="text-yellow-400"> websites</span>
          </h1>
          <p className="text-[15px] mt-[1.3rem] text-white opacity-75 text-balance">
            Experience in full-stack development. Proficient in Java, Node.js,
            JavaScript, and React, creation of dynamic and responsive web
            applications. Backend expertise includes Spring Boot, JPA, and
            database management with PostgreSQL and MySQL. I worked on diverse
            projects, including e-commerce platforms, task management apps, and
            interactive games, which showcases the skills in both frontend and
            backend development, where high-quality code is further demonstrated
            by his experience with TypeScript and various API integrations.
            <br />
            <br />

            Likewise, I&apos;ve used modern tools and frameworks such as Tailwind,
            Material UI, Docker, and continuous integration.
            <br />
            Additionally, Mobile development, having created Android Kotlin apps
            with Jetpack Compose and Flutter apps using Dart, including API
            integrations for comprehensive functionality.
          </p>
        </div>
        <div className="lg:ml-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]">

            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              data-aos-delay="200"
              className="p-6 text-center bg-yellow-500"
            >
              <p className="text-[50px] text-black font-bold">2</p>
              <p className="text-[20px] text-black font-600">
                Years Experience
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              data-aos-delay="200"
              className="p-6 text-center bg-yellow-500"
            >
              <p className="text-[50px] text-black font-bold">5+</p>
              <p className="text-[20px] text-black font-600">Project Done</p>
            </div>
            <div className="mt-[2rem] space-y-3 flex flex-col justify-center ">
              <div className="flex items-center space-x-4">
                <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                <p className="text-[18px] text-white">Frontend Development</p>
              </div>
              <div className="flex items-center space-x-4">
                <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                <p className="text-[18px] text-white">Backend Development</p>
              </div>
              <div className="flex items-center space-x-4">
                <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                <p className="text-[18px] text-white">Web Development</p>
              </div>
              <div className="flex items-center space-x-4">
                <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                <p className="text-[18px] text-white">Mobile App Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
