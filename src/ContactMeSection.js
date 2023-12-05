import React from "react";
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactMeSection = () => {
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      type: Yup.string().required("Type is required"),
      comment: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        if (data.type === "success") {
          toast({
            title: "Success",
            description: "Your message has been sent successfully.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          formik.resetForm();
        } else {
          throw new Error("An error occurred. Please try again.");
        }
      } catch (error) {
        console.error(error);
        toast({
          title: "Error",
          description: error.message || "An error occurred. Please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    },
  });

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
        <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
          <VStack spacing="4" align="start" maxW="400px" width="100%">
            <FormControl
              isRequired
              isInvalid={formik.touched.firstName && formik.errors.firstName}
              width="100%"
            >
              <FormLabel>Name</FormLabel>
              <Input {...formik.getFieldProps("firstName")} type="text" placeholder="Your Name" />
              <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={formik.touched.email && formik.errors.email}
              width="100%"
            >
              <FormLabel>Email Address</FormLabel>
              <Input {...formik.getFieldProps("email")} type="email" placeholder="Your Email" />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={formik.touched.type && formik.errors.type}
              width="100%"
            >
              <FormLabel>Type</FormLabel>
              <Input {...formik.getFieldProps("type")} type="text" placeholder="Type of Enquiry" />
              <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={formik.touched.comment && formik.errors.comment}
              width="100%" 
            >
              <FormLabel>Message</FormLabel>
              <Textarea {...formik.getFieldProps("comment")} placeholder="Your Message" />
              <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
            </FormControl>
            <Button colorScheme="blue"
              variant="outline"
              _hover={{ bg: "blue.500", color: "white" }} type="submit" isLoading={formik.isSubmitting} width="100%">
              Submit
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
};

export default ContactMeSection;
