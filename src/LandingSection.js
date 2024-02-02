import React from "react";
import { Box, Heading, Text, Image, Flex, IconButton, Button } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const LandingSection = () => {
  const avatarUrl =
    "https://media.licdn.com/dms/image/D4D03AQGEDncbYPFgLg/profile-displayphoto-shrink_400_400/0/1706686626455?e=1712188800&v=beta&t=OPvn-CWJIKSzPfH3Wv5xAfKyokBKafWPCKrU65GVyNA";
  const greeting = "Hey, I'm Dabwitso!";
  const introduction = "A creative developer with a love for automation,";
  const bio = "lets bring that innovative idea to life.";

  const handleGitHubClick = () => window.open("https://github.com/Jeenyhus", "_blank");
  const handleLinkedInClick = () => window.open("https://www.linkedin.com/in/dabwitso-mweemba-439166204/", "_blank");
  const handleTwitterClick = () => window.open("https://www.twitter.com/lifeofdabiwtso/", "_blank");

  return (
    <Box textAlign="center" py="20" backgroundColor="#f2f2f2" height="100vh">
      <Flex direction="column" justify="center" align="center" height="100%">
        <Image src={avatarUrl} alt="Avatar" borderRadius="full" boxSize="150px" mb="4" />
        <Heading as="h1" fontSize="3xl" color="#333" mb="2" fontFamily="Monaco">
          {greeting}
        </Heading>
        <Text fontSize="sm" color="#555" mb="4" fontFamily="Monaco">
          "{introduction} <br /> {bio}"
        </Text>
        <Flex>
          <Link to="/contactme-section">
            <Button
              colorScheme="blue"
              variant="outline"
              _hover={{ bg: "blue.500", color: "white", borderColor: "blue.500" }}
              mr="2"
            >
              Reach Out
            </Button>
          </Link>

          <Link to="/projects-section">
            <Button
              colorScheme="blue"
              variant="outline"
              _hover={{ bg: "blue.500", color: "white" }}
                  ml="2"
                >
                  Projects
                </Button>
              </Link>

              <Link to="/services">
                <Button
                  colorScheme="blue"
                  variant="outline"
                  _hover={{ bg: "blue.500", color: "white" }}
                  ml="2"
            >
              Services
            </Button>
          </Link>
        </Flex>

        <Flex mt="8" position="absolute" bottom="4" left="50%" transform="translateX(-50%)">
          <IconButton
            as={FaGithub}
            boxSize={8}
            color="#333"
            onClick={handleGitHubClick}
            aria-label="GitHub Profile"
            mr="4"
            _hover={{ color: "black" }}
          />
          <IconButton
            as={FaLinkedin}
            boxSize={8}
            color="#0077B5"
            onClick={handleLinkedInClick}
            aria-label="LinkedIn Profile"
            mr="4"
            _hover={{ color: "#0077B5" }}
          />
          <IconButton
            as={FaEnvelope}
            boxSize={8}
            color="#0077B5"
            onClick={handleTwitterClick}
            aria-label="Twitter Profile"
            _hover={{ color: "#0077B5" }}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default LandingSection;
