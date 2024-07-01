import React from "react";
import ProjectCard from "./Helper/ProjectCard";
const Project = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="text-center">
        <p className="heading__mini">Recent Works</p>
        <h1 className="heading__primary">
          My best <span className="text-yellow-300">Pojects</span>
        </h1>
      </div>
      {/* card */}
      <ProjectCard
        image="/images/p1.png"
        title="E-commerce Website"
        tech1="React"
        tech2="NextJs"
        tech3="Tailwind"
        tech4="TypeScript"
      />
      <ProjectCard
        image="/images/p2.png"
        title="Portfolio Website"
        tech1="React"
        tech2="NextJs"
        tech3="Tailwind"
        tech4="TypeScript"
      />
      <ProjectCard
        image="/images/p3.png"
        title="Full Stack Food delivery app"
        tech1="React"
        tech2="NextJs"
        tech3="Node js"
        tech4="Mongo"
      />
      <ProjectCard
        image="/images/p4.png"
        title="Travel website"
        tech1="React"
        tech2="NextJs"
        tech3="Node js"
        tech4="Mongo"
      />
    </div>
  );
};

export default Project;
