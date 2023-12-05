// Card.js

import React from "react";
import PropTypes from "prop-types";
import { Box, VStack, Heading, Text } from "@chakra-ui/react";
import styles from "./Card.module.css";

const Card = ({ project }) => {
  const { title, description, image } = project || {};

  return (
    <Box className={styles.card} data-title={title}>
      <VStack align="center" justify="center" spacing="3">
        <img className={styles.image} src={image} alt={title} />
        <Heading as="h2" fontSize="lg" color="#333" fontWeight="bold">
          {title}
        </Heading>
        <Text className={styles.description}>{description}</Text>
      </VStack>
    </Box>
  );
};

Card.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
