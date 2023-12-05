import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AlertProvider } from "./customHooks";
import LandingSection from "./LandingSection";
import ProjectsSection from "./ProjectsSection";
import ContactMeSection from "./ContactMeSection";


const App = () => {
  return (
    <AlertProvider>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingSection />} />
            <Route path="/projects-section" element={<ProjectsSection />} />
            <Route path="/contactme-section" element={<ContactMeSection />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </AlertProvider>
  );
};

export default App;
