import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import projects from "../datas/projects.json";
import "../style/components/projects.scss";

const Projects = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  // Fonction pour changer l'index au projet suivant
  const handleNext = () => {
    setCenterIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // Fonction pour changer l'index au projet précédent
  const handleBack = () => {
    setCenterIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  // Gérer les événements du clavier
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleNext(); // Flèche droite
      } else if (event.key === "ArrowLeft") {
        handleBack(); // Flèche gauche
      }
    };

    // Ajouter l'événement au montage du composant
    window.addEventListener("keydown", handleKeyDown);

    // Nettoyer l'événement au démontage du composant
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // Le tableau vide [] assure que l'effet s'exécute uniquement au montage et démontage

  // Positions des projets dans le carousel
  const positions = ["center", "right", "right1", "hidden", "hidden", "left1", "left"];

  // Fonction pour déterminer la position des projets
  const getPosition = (index) => {
    const diff = (index - centerIndex + projects.length) % projects.length;
    return positions[diff] || "hidden";
  };

  // Définir les animations pour les projets
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
