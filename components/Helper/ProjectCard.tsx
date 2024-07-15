import Image from "next/image";
import React from "react";
import {
  CodeBracketIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";

interface Props {
  image: string;
  title: string;
  description: string;
  code: string;
  deploy: string;
  tech1: string;
  tech2: string;
  tech3: string;
  tech4: string;
}
const ProjectCard = ({
  image,
  title,
  description,
  code,
  deploy,
  tech1,
  tech2,
  tech3,
  tech4,
}: Props) => {
  return (
    <div className="grid w-[80%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="p-4 rounded-xl relative cursor-pointer hover:-rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md">
        <Image
          src={`${image}`}
          alt={title}
          width={500}
          height={500}
          className="object-contain rounded-xl mx-auto shadow-md h-[300px]"
        />
      </div>
      <div>
        <h1 className="text-[25px] text-white"> {title}</h1>
        <p className="text-white opacity-65 text-[15px] mt-[1rem]">
          {description}
        </p>
        <div className="flex space-x-2 justify-center pt-4">
          <span className="font-bold text-white">{tech1}</span>
          <span className="text-white">|</span>
          <span className="font-bold  text-white">{tech2}</span>
          <span className="text-white">|</span>
          <span className="font-bold  text-white">{tech3}</span>
          <span className="text-white">|</span>
          <span className="font-bold  text-white">{tech4}</span>
        </div>
        <div className="mt-[1.3rem] sm:grid-cols-2 grid gap-[1rem]">
          <div className="flex justify-center">
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <CodeBracketIcon className="h-6 w-6 text-white mr-2" />
              View Code
            </a>
          </div>
          <div className="flex justify-center">
            <a
              href={deploy}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <ComputerDesktopIcon className="h-6 w-6 text-white mr-2" />
              View Deploy
            </a>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ProjectCard;
