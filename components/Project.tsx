import React from "react";
import ProjectCard from "./Helper/ProjectCard";
import {
  CodeBracketIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
const Project = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900" id="project">
      <div className="text-center">
        <p className="heading__mini">Recent Works</p>
        <h1 className="heading__primary">
          My best <span className="text-yellow-300">Projects</span>
        </h1>
      </div>
      {/* card */}
      <ProjectCard
        image="/images/pro0.png"
        title="E-commerce Website (Frontend)"
        description="E-commerce platform built with React and Redux Toolkit, integrating APIs for seamless functionality. Features include user authentication, product management, and a responsive design using Bootstrap."
        code="https://github.com/pablex72/ecommerce-shop-redux"
        deploy="https://ecommerce-website-pdev.vercel.app/"
        tech1="React"
        tech2="Redux"
        tech3="Bootstrap"
        tech4="Javascript"
      />
      <ProjectCard
        image="/images/pro3.png"
        title="Product Sales Blog (Frontend)"
        description="A web-based platform designed for product sales, developed using React Js and Material UI. It offers a variety of management tools to streamline the sales process, ensuring a seamless user experience. The platform is efficient, user-friendly, and equipped with features that facilitate effective product management and sales tracking."
        code="https://github.com/pablex72/react-mui-blog"
        deploy="https://react-mui-shop.vercel.app/"
        tech1="React"
        tech2="Redux"
        tech3="Material-UI"
        tech4="Javascript"
      />
      <ProjectCard
        image="/images/pro4.png"
        title="Bank Card Management Interface (Frontend)"
        description="This model handles requests, approvals, and credit applications. Developed using React Js and Bootstrap, it ensures a streamlined user interface with responsive design and state management using Redux Toolkit for efficient data handling."
        code="https://github.com/pablex72/bank-app"
        deploy="https://bank-card-manager-tbl5.vercel.app/"
        tech1="React"
        tech2="Bootstrap"
        tech3="Redux"
        tech4="Javascript"
      />

      {/* with 3 buttons for full stack option NODE */}
      <div className="grid w-[80%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="p-4 rounded-xl relative cursor-pointer hover:-rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md">
          <Image
            src={"/images/pro2.png"}
            alt={"Task Management Application (Full Stack)"}
            width={500}
            height={500}
            className="object-contain rounded-xl mx-auto shadow-md h-[300px]"
          />
        </div>
        <div>
          <h1 className="text-[25px] text-white">
            {"Task Management Application (Full Stack)"}
          </h1>
          <p className="text-white opacity-65 text-[15px] mt-[1rem]">
            {
              "Task Management Application using React Js and Nest Js, featuring Tailwind CSS for styling and API context for state management. MongoDB serves as the database, ensuring robust data handling and scalability for comprehensive task management."
            }
          </p>
          <div className="flex space-x-2 justify-center pt-4">
            <span className="font-bold text-white">{"React"}</span>
            <span className="text-white">|</span>
            <span className="font-bold  text-white">{"Nest Js"}</span>
            <span className="text-white">|</span>
            <span className="font-bold  text-white">{"MongoDB"}</span>
            <span className="text-white">|</span>
            <span className="font-bold  text-white">{"Tailwind CSS"}</span>
          </div>
          <div className="mt-[1.3rem] sm:grid-cols-3 grid gap-[1rem]">
            <div className="flex justify-center">
              <a
                href={"https://github.com/pablex72/tasksapi-nestjs-mongodb"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <CodeBracketIcon className="h-6 w-6 text-white mr-2" />
                View Code [BE]
              </a>
            </div>
            <div className="flex justify-center">
              <a
                href={"https://github.com/pablex72/tasksclient-react-typescript"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <CodeBracketIcon className="h-6 w-6 text-white mr-2" />
                View Code [FE]
              </a>
            </div>
            <div className="flex justify-center">
              <a
                href={"https://tasks-app-devpa.vercel.app/"}
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

      {/* with 3 buttons for full stack option SPRING*/}
      <div className="grid w-[80%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="p-4 rounded-xl relative cursor-pointer hover:-rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md">
          <Image
            src={"/images/pro5.png"}
            alt={"Note Reminder Application (Full Stack)"}
            width={500}
            height={500}
            className="object-contain rounded-xl mx-auto shadow-md h-[300px]"
          />
        </div>
        <div>
          <h1 className="text-[25px] text-white">
            {"Note Reminder Application (Full Stack)"}
          </h1>
          <p className="text-white opacity-65 text-[15px] mt-[1rem]">
            {
              "Full-Stack Note Reminder Application developed with a Java Spring Boot backend and React frontend. The application features state management, efficient note handling, and a PostgreSQL database for robust data storage. "
            }
          </p>
          <div className="flex space-x-2 justify-center pt-4">
            <span className="font-bold text-white">{"React"}</span>
            <span className="text-white">|</span>
            <span className="font-bold  text-white">{"Spring"}</span>
            <span className="text-white">|</span>
            <span className="font-bold  text-white">{"Postgres"}</span>
            <span className="text-white">|</span>
            <span className="font-bold  text-white">{"Axios"}</span>
          </div>
          <div className="mt-[1.3rem] sm:grid-cols-3 grid gap-[1rem]">
            <div className="flex justify-center">
              <a
                href={"https://github.com/pablex72/notes-reminder-backend"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <CodeBracketIcon className="h-6 w-6 text-white mr-2" />
                View Code [BE]
              </a>
            </div>
            <div className="flex justify-center">
              <a
                href={"https://github.com/pablex72/notes-reminder-app-client"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <CodeBracketIcon className="h-6 w-6 text-white mr-2" />
                View Code [FE]
              </a>
            </div>
            <div className="flex justify-center">
              <a
                href={"https://notes-reminder-app-client-cque.vercel.app/"}
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

      {/* with only one button option       */}
      <div className="grid w-[80%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="p-4 rounded-xl relative cursor-pointer hover:-rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md">
          <Image
            src={"/images/pro7.png"}
            alt={"Contact Management App (Mobile App)"}
            width={500}
            height={500}
            className="object-contain rounded-xl mx-auto shadow-md h-[300px]"
          />
        </div>
        <div>
          <h1 className="text-[25px] text-white">
            {" "}
            {"Contact Management App (Mobile App)"}
          </h1>
          <p className="text-white opacity-65 text-[15px] mt-[1rem]">
            {
              "Developed with Kotlin, this app features contact management using Coroutines, Room, Retrofit, and LiveData. It handles API requests efficiently, offering a seamless user experience for managing contacts."
            }
          </p>
          <div className="flex space-x-2 justify-center pt-4">
            <span className="font-bold text-white">{"Kotlin"}</span>
            <span className="text-white">|</span>
            <span className="font-bold  text-white">{"LiveData"}</span>
            <span className="text-white">|</span>
            <span className="font-bold  text-white">{"Retrofit"}</span>
            <span className="text-white">|</span>
            <span className="font-bold  text-white">{"Room"}</span>
          </div>
          <div className="mt-[1.3rem] sm:grid-cols-1 grid gap-[1rem]">
            <div className="flex justify-center">
              <a
                href={"https://github.com/pablex72/android-app-contact"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <CodeBracketIcon className="h-6 w-6 text-white mr-2" />
                View Code
              </a>
            </div>
          </div>
        </div>
        <hr />
      </div>
      {/* with only one button option       */}
      <div className="grid w-[80%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="p-4 rounded-xl relative cursor-pointer hover:-rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md">
          <Image
            src={"/images/pro8.png"}
            alt={"Notebooks Explorer App (Mobile App)"}
            width={500}
            height={500}
            className="object-contain rounded-xl mx-auto shadow-md h-[300px]"
          />
        </div>
        <div>
          <h1 className="text-[25px] text-white">
            {" "}
            {"Notebooks Explorer App (Mobile App)"}
          </h1>
          <p className="text-white opacity-65 text-[15px] mt-[1rem]">
            {
              "Developed in Flutter using Dart, this app explores notebook products with Flutter Bloc for state management and MercadoLibre API integration. Users can search for notebooks, view detailed information, and save their favorite products locally using shared preferences. This app provides a seamless browsing experience."
            }
          </p>
          <div className="flex space-x-2 justify-center pt-4">
            <span className="font-bold text-white">{"Dart"}</span>
            <span className="text-white">|</span>
            <span className="font-bold  text-white">{"Flutter"}</span>
            <span className="text-white">|</span>
            <span className="font-bold  text-white">
              {"Shared Pref."}
            </span>
            <span className="text-white">|</span>
            <span className="font-bold  text-white">{"Bloc"}</span>
          </div>
          <div className="mt-[1.3rem] sm:grid-cols-1 grid gap-[1rem]">
            <div className="flex justify-center">
              <a
                href={"https://github.com/pablex72/android-app-contact"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <CodeBracketIcon className="h-6 w-6 text-white mr-2" />
                View Code
              </a>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Project;
