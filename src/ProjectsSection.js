import React from "react";
import { Box, Heading, SimpleGrid, Button } from "@chakra-ui/react";
import Card from "./Card";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Zali",
      description:
        "Zali is a web-based charting system for Zambian music. It collects and ranks artist songs based on weekly music data from all streaming platforms.",
      techStack: "React.js",
      image: "https://via.placeholder.com/200",
    },
    {
      title: "The Dance Flow",
      description:
        "A platform for dance instructors to host classes, dancers register and make payments online, facilitates workshop registrations, dance battles, and more.",
      techStack: "Django, React.js",
      image: "https://via.placeholder.com/200",
    },
    {
      title: "Tech Support Ticket System",
      description:
        "A tool that helps manage technical issues efficiently. It allows users to create tickets, assigns, prioritizes tasks, and facilitates communication.",
      techStack: "Django, React.js",
      image: "https://techsupport.edulution.org/staticfiles/images/edulution_map_only_green.png",
    },
  ];

  return (
    <Box textAlign="center" py="20" backgroundColor="#f2f2f2" height="100vh">
      <Heading mb="4" fontSize="2xl" color="#333">
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="8" justifyItems="center">
        {projects.map((project, index) => (
          <Card
            key={index}
            project={project}
          />
        ))}
      </SimpleGrid>
      <Button
        colorScheme="blue"
        variant="outline"
        _hover={{ bg: "blue.500", color: "white", borderColor: "blue.500" }}
        mt="8"
      >
        View All
      </Button>
    </Box>
  );
};

export default ProjectsSection;
