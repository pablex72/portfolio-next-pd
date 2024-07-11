import AboutMe from "@/components/AboutMe";
import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import Price from "@/components/Price";
import Project from "@/components/Project";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import React, { useState } from "react";

const HomePage = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <div className="overflow-hidden">
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Nav openNav={showNavHandler} />
      <Hero />
      <AboutMe />
      <Services />
      <Skills />
      <Project />
      <Price />
      <Reviews />
      <Blog />
    </div>
  );
};

export default HomePage;
