import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importer le composant FontAwesomeIcon
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"; // Importer les chevrons
import projects from "../datas/projects.json";
import "../style/components/projects.scss";

const Projects = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  const handleNext = () => {
    setCenterIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handleBack = () => {
    setCenterIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const positions = ["center", "right", "right1", "hidden", "hidden", "left1", "left"];

  const getPosition = (index) => {
    const diff = (index - centerIndex + projects.length) % projects.length;
    return positions[diff] || "hidden";
  };

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5, opacity: 1 },
    left: { x: "-30%", scale: 0.7, zIndex: 3, opacity: 0.8 },
    left1: { x: "-50%", scale: 0.5, zIndex: 2, opacity: 0.5 },
    right: { x: "30%", scale: 0.7, zIndex: 3, opacity: 0.8 },
    right1: { x: "50%", scale: 0.5, zIndex: 2, opacity: 0.5 },
    hidden: { x: "0%", scale: 0.3, zIndex: 0, opacity: 0 },
  };

  return (
    <div id="projects" className="carousel-container">
      <h2>PROJETS</h2>
      <div className="carousel">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="carousel-item"
            initial="hidden"
            animate={getPosition(index)}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
          >
            <img src={project.cover} alt={`Cover of ${project.title}`} className="carousel-image" />
            <h3 className="project-title">{project.title}</h3>
          </motion.div>
        ))}
        <div className="carousel-arrow left" onClick={handleBack}>
          <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        </div>
        <div className="carousel-arrow right" onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} size="2x" />
        </div>
      </div>
    </div>
  );  
};

export default Projects;
