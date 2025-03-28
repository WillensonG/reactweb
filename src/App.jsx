import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BentoPortfolio from "./components/LandingPages";
import AboutUs from "./components/AboutUs";
import ProjectsPage from "./components/projectsPage";
import ModernPortfolio from "./components/test";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<BentoPortfolio />} />    */}
        <Route path="/" element={<ModernPortfolio />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
