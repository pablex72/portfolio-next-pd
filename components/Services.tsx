import React from "react";
import ServiceCard from "./Helper/ServiceCard";

const Services = () => {
  return (
    <div id="services" className="pt-[5rem] pb-[3rem] bg-[#0b0c13]">
      <div className="text-center">
        <p className="heading__mini">Popular Services</p>
        <h1 className="heading__primary">
          My Special <span className="text-yellow-300">Services</span> For you
        </h1>
      </div>
      <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <ServiceCard
            title="React Js Website"
            num="01"
            description="Creation of responsive websites using React Js, incorporating Redux, Material UI, Bootstrap, Tailwind, Redux Context API, and local storage for dynamic, interactive experiences."
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="10"
        >
          <ServiceCard title="Java Spring Boot API" num="02" description="Development of robust Java Spring Boot APIs with Spring Security, design patterns, and deployment strategies. Expertise in MySQL, SQL Server, and PostgreSQL database integration."/>
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="20"
        >
          <ServiceCard title="Python Django API" num="03" description="Building of secure and scalable APIs using Python Django, ensuring efficient data handling and seamless integration with various databases for high-performance applications"/>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="30"
        >
          <ServiceCard title="Node Js API" num="04" description="Creation of Node Js APIs with Express and Nest Js, integrating MongoDB, MySQL, and PostgreSQL databases for reliable, scalable, and high-performing backend solutions."/>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="40"
        >
          <ServiceCard title="Mobile App" num="05" description="Development of Android apps with Kotlin using Jetpack Compose and Flutter apps with Dart, featuring comprehensive API integrations for versatile and robust mobile solutions."/>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="50"
        >
          <ServiceCard title="Fullstack Development" num="06" description="Provision of complete full-stack development services, combining frontend technologies like React with robust backend solutions using Node Js, Java Spring Boot, and Python Django."/>
        </div>
      </div>
    </div>
  );
};

export default Services;
