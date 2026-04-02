import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutUs from "./components/AboutUs";
import ProjectsPage from "./components/projectsPage";
import ModernPortfolio from "./components/test";

import RoadmapViewer from "./components/webS";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<BentoPortfolio />} />    */}
        <Route path="/" element={<ModernPortfolio />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/Web" element={<RoadmapViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
