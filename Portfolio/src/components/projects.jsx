import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ModalProject from "./modalProject";
import projects from "../datas/projects.json";

const Projects = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.classList.add("no-scroll"); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.classList.remove("no-scroll"); 
  };

  const handleNext = () => {
    setCenterIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handleBack = () => {
    setCenterIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isModalOpen) { // Exécute uniquement si la modale est fermée
        if (event.key === "ArrowRight") {
          handleNext();
        } else if (event.key === "ArrowLeft") {
          handleBack();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]); // Ajoute isModalOpen comme dépendance pour que cela se réévalue à chaque changement

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
    <section id="projects" className="carousel-container">
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
            onClick={() => openModal(project)}
          >
            <h3 className="project-title">{project.title}</h3>
            <div className="image-wrapper"> 
              <img src={project.cover} alt={`Cover of ${project.title}`} className="carousel-image" />
              <div className="carousel-overlay">Cliquez sur moi !</div>
            </div>
          </motion.div>
        ))}

        <div className="carousel-arrow left" onClick={handleBack}>
          <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        </div>
        <div className="carousel-arrow right" onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} size="2x" />
        </div>
      </div>
      <div className="carousel-indicators">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === centerIndex ? "active" : ""}`}
          ></div>
        ))}
      </div>

      <ModalProject isOpen={isModalOpen} project={selectedProject} onClose={closeModal} />
    </section>
  );
};

export default Projects;