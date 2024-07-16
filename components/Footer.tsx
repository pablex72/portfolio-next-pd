import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black " id="contact">
      <h1 className="heading__primary flex justify-center pb-10">
        Contact <span className="text-yellow-300 ml-5"> Me</span>
      </h1>
      {/* footer */}
      <div className="w-[80%] mx-auto flex flex-col justify-center items-center gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40">
        <Image
          width={50}
          height={50}
          src={"/images/icono-blanco.svg"}
          alt="footer-icono"
        />
        <p className="text-[14px] mt-[0.5rem] sm:px-[200px] flex flex-row items-center justify-center text-center text-white opacity-70">
          I am constantly learning and developing web applications, always
          pushing the boundaries of what&apos;s possible. Let&apos;s collaborate and
          create something amazing together. Reach out, and let&apos;s start a
          project!
          <br />
          <br />
          You can reach me through the following links, either on LinkedIn or
          via email.
        </p>
        <div
          data-aos="zoom-in"
          data-aos-delay="1600"
          className="h-[45px] w-[80%] flex flex-row justify-center gap-10"
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
          <a
            href="mailto:tonyp2hoy@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineMail color="white" size={"45px"} />
          </a>
        </div>

        <div className="text-[14px] mt-[0.5rem] px-[200px] flex flex-row items-center justify-center text-center text-white opacity-70">
          Pablo Mejillones (2024) &#169;
        </div>
      </div>
    </div>
  );
};

export default Footer;
