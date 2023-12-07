import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useForm } from "@formspree/react";

// Constants
const FORM_ID = "moqogdkj";
const REDIRECT_DELAY = 4000;

const ContactMeSection = () => {
  const history = useNavigate();
  const [state, handleSubmit] = useForm(FORM_ID);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (state.succeeded) {
      setTimeout(() => {
        history.push("/");
      }, REDIRECT_DELAY);
    } else if (state.errors && state.errors.length > 0) {
      setError("There was an error submitting the form. Please try again.");
    }
  }, [state.succeeded, state.errors, history]);

  return (
    <Box
      id="contactme-section"
      bg="#F2F2F2"
      p="8"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing="8" align="center">
        {error && (
          <Alert status="error" mt={2}>
            <AlertIcon />
            {error}
          </Alert>
        )}

        {state.succeeded && (
          <Alert status="success" mt={2}>
            <AlertIcon />
            Your message has been sent!
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <VStack spacing="4" align="start" maxW="400px" width="100%">
            <FormControl isRequired width="100%" isInvalid={state.errors?.fullName}>
              <FormLabel htmlFor="fullName">Name</FormLabel>
              <Input id="fullName" type="text" name="fullName" />
            </FormControl>
            <FormControl isRequired width="100%" isInvalid={state.errors?.email}>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input id="email" type="email" name="email" />
            </FormControl>
            <FormControl isRequired width="100%" isInvalid={state.errors?.type}>
              <FormLabel htmlFor="type">Type</FormLabel>
              <Input id="type" type="text" name="type" />
            </FormControl>
            <FormControl isRequired width="100%" isInvalid={state.errors?.message}>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea id="message" name="message" />
            </FormControl>
            <Button
              colorScheme="blue"
              variant="outline"
              _hover={{ bg: "blue.500", color: "white" }}
              type="submit"
              isLoading={state.submitting}
              width="100%"
            >
              Submit
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
};

export default ContactMeSection;
