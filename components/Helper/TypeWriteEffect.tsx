import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeWriteEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Frontend Dev.",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Backend Dev.",
        1000,
        "Mobile Dev.",
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="xl:text-[38px] lg:text-[36px] sm:text-[35px] text-[25px] text-white font-bold"
      repeat={Infinity}
    />
  );
};

export default TypeWriteEffect;
