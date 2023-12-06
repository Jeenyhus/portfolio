import React from "react";
import PropTypes from "prop-types";
import { Box, VStack, Heading, HStack, Link } from "@chakra-ui/react";
import { FaGithub, FaLink } from "react-icons/fa";
import styles from "./Card.module.css";

const Card = ({ project }) => {
  const { title, description, image, projectURL, gitHub } = project || {};

  return (
    <Box className={styles.card} data-title={title}>
      <VStack align="center" justify="center" spacing="3">
        <img className={styles.image} src={image} alt={title} />
        <Heading as="h2" fontSize="lg" color="#333" fontWeight="bold">
          {title}
        </Heading>
        <p className={styles.description}>{description}</p>

        {/* Project and GitHub Links */}
        <HStack spacing="2">
          {/* Project Link */}
          {projectURL && (
            <Link href={projectURL} isExternal color="#3182ce" display="flex" alignItems="center" target="_blank">
              <FaLink style={{ marginRight: '5px' }} />
            </Link>
          )}

          {/* GitHub Link */}
          {gitHub && (
            <Link href={`https://${gitHub}`} isExternal color="#333" display="flex" alignItems="center" target="_blank">
              <FaGithub style={{ marginRight: '5px' }} />
            </Link>
          )}
        </HStack>
      </VStack>
    </Box>
  );
};

Card.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    projectURL: PropTypes.string,
    gitHub: PropTypes.string,
  }).isRequired,
};

export default Card;
