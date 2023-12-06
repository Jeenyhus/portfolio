// OrganizationLogo.js
import React from "react";
import { Image } from "@chakra-ui/react";

const OrganizationLogo = ({ logo, className }) => {
  return (
    <Image
      src={logo}
      alt="Organization Logo"
      boxSize="40px"
      objectFit="contain"
      margin="2"
      className={`GrayscaleLogo ${className}`}
    />
  );
};

export default OrganizationLogo;
