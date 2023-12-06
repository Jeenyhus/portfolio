// TechnologyLogo.js
import React from "react";
import { Image } from "@chakra-ui/react";

const TechnologyLogo = ({ logo, className }) => {
  return (
    <Image
      src={logo}
      alt="Tech Logo"
      boxSize="60px"
      objectFit="contain"
      transition="all 0.3s"
      _hover={{ transform: "scale(1.1)" }}
      className={`GrayscaleLogo ${className}`}
    />
  );
};

export default TechnologyLogo;
