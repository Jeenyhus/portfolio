import React from "react";
import {
  Box,
  SimpleGrid,
  UnorderedList,
  ListItem,
  Center,
} from "@chakra-ui/react";
import Card from "./Card";
import OrganizationLogo from "./OrganizationLogo";
import TechnologyLogo from "./TechnologyLogo";
import './ProjectSection.css';


const ProjectsSection = () => {
  const projects = [
    {
      title: "Zali",
      description:
        "A web-based charting system for Zambian music. It collects and ranks artist songs based on weekly music data from all streaming platforms.",
      techStack: "React.js",
      image: `${process.env.PUBLIC_URL}/images/zali.jpeg`,
      projectURL: '#',
      gitHub: 'www.github.com/Jeenyhus/zali-100',
    },
    {
      title: "The Dance Flow",
      description:
        "A platform for dance instructors to host classes, dancers register and make payments online, facilitates workshop registrations, dance battles, and more.",
      techStack: "Django, React.js",
      image: `${process.env.PUBLIC_URL}/images/dance-logo.png`,
      projectURL: '#',
      gitHub: 'www.github.com/Jeenyhus/dance-flow',
    },
    {
      title: "Tech Support Ticket System",
      description:
        "A tool that helps manage technical issues efficiently. It allows users to create tickets, assigns, prioritizes tasks, and facilitates communication.",
      techStack: "Django, React.js",
      image: `${process.env.PUBLIC_URL}/images/techsupport.png`,
      projectURL: 'https://techsupport.edulution.org/accounts/login/?next=/',
      gitHub: 'www.github.com/edulution/technical-support-management-system',
    },
    {
      title: "Cryto Web",
      description:
        "This is a web application that shows the top 20 crypto currencies, with the live search filter",
      techStack: "Vue.js",
      image: `${process.env.PUBLIC_URL}/images/crypto.png`,
      projectURL: '#',
      gitHub: 'https://github.com/Jeenyhus/crypto_web_app',
    },
  ];

  const organizationLogos = [
    "coursera.png",
    "edulution.png",
    "google.png",
    "ibm.png",
    "meta.webp",
    "vue-mastery.png",
  ];

  // Logos for technologies
  const techLogos = [
    "js.png",
    "node.svg",
    "react.png",
    "vue.png",
    "python-logo.png",
    "django.png",
    "sql.png",
    "psql.png",
  ];

  const renderProjectCards = () => {
    return projects.map((project, index) => (
      <Card key={index} project={project} />
    ));
  };

  const renderOrganizationLogos = () => {
    return organizationLogos.map((logo, index) => (
      <ListItem key={index} mx={{ base: 2, md: 4 }}>
        <OrganizationLogo
          logo={`${process.env.PUBLIC_URL}/images/${logo}`}
          className="GrayscaleLogo"
        />
      </ListItem>
    ));
  };

  const renderTechLogos = () => {
    return techLogos.map((logo, index) => (
      <ListItem key={index} mx={{ base: 2, md: 4 }}>
        <TechnologyLogo
          logo={`${process.env.PUBLIC_URL}/images/${logo}`}
          className="GrayscaleLogo"
        />
      </ListItem>
    ));
  };

  return (
    <Box textAlign="center" py={{ base: 10, md: 20 }} backgroundColor="#f2f2f2" minHeight="100vh">
      {/* Wrap SimpleGrid with Center component */}
      <Center>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 4, md: 6 }} mx="auto">
          {renderProjectCards()}
        </SimpleGrid>
      </Center>

      {/* Organization Logos */}
      <Box mt={{ base: 8, md: 12 }}>
        <h3>Organizations I collaborated with to obtain my certifications.</h3><br />
        <UnorderedList listStyleType="none" padding="0" display="flex" justifyContent="center">
          {renderOrganizationLogos()}
        </UnorderedList>
      </Box>

      {/* Technology Logos */}
      <Box mt={{ base: 8, md: 12 }}>
        <h3>Technologies I have experience with.</h3><br />
        <UnorderedList listStyleType="none" padding="0" display="flex" justifyContent="center">
          {renderTechLogos()}
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default ProjectsSection;