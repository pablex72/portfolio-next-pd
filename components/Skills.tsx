import React from "react";
import SkillCard from "./Helper/SkillCard";

const Skills = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center">
        <div className="col-span-3">
          <p className="heading__mini">My Skills</p>
          <h1 className="heading__primary">
            Let&apos;s explore my main
            <span className="text-yellow-300"> Skills</span> & Experience
          </h1>
          <p className="text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]">
          Let's explore the primary skills and experience. Proficiency includes React for dynamic web applications, CSS for styling, JavaScript and TypeScript for interactive features, and HTML for structure. Expertise in Node JS for backend development, Java with Spring for robust APIs, and Python with Django for secure applications. Mobile app development includes Kotlin for Android and Flutter for cross-platform solutions.
          </p>
          {/* <button className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
            <span className="relative z-10">Learn More</span>
          </button> */}
        </div>
        <div className="col-span-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center">
            <div data-aos="flip-left" data-aos-anchor-placement="top-center">
              <SkillCard title="React" image="/images/react.svg" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="200"
            >
              <SkillCard title="CSS" image="/images/css.svg" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="400"
            >
              <SkillCard title="JavaScript" image="/images/js.svg" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="600"
            >
              <SkillCard title="TypeScript" image="/images/ts.svg" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="800"
            >
              <SkillCard title="HTML" image="/images/html.svg" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="1000"
            >
              <SkillCard title="Node JS" image="/images/node.svg" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="1200"
            >
              <SkillCard title="Java" image="/images/java.svg" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="1400"
            >
              <SkillCard title="Spring" image="/images/spring.svg" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="1600"
            >
              <SkillCard title="Python" image="/images/python.svg" />
            </div>

            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="1800"
            >
              <SkillCard title="Dajngo" image="/images/django.svg" />
            </div>

            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="2000"
            >
              <SkillCard title="Kotlin" image="/images/kotlin.svg" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="2200"
            >
              <SkillCard title="Flutter" image="/images/flutter.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
