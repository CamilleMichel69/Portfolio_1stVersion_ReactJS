import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FlippingCards from "./flippingCards";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft, faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons"; // Ajout de faTimes

Modal.setAppElement("#root");

const ModalProject = ({ isOpen, project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && project && project.pictures.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % project.pictures.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isOpen, project]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % project.pictures.length);
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + project.pictures.length) % project.pictures.length);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Project Details"
      className="project-modal"
      overlayClassName="project-modal-overlay"
    >
      {project && (
        <div className="modal-content">
          <button onClick={onClose} className="modal-close-icon">
            <span className="text-none">Close</span>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h2 className="modal-title">{project.title}</h2>
          <div className="modal-carousel">
            <div className="carousel">
              <motion.div
                className="carousel-image-container"
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <img
                  src={project.pictures[currentIndex]}
                  alt={`Image ${currentIndex + 1} de ${project.title}`}
                  className="carousel-image"
                />
              </motion.div>
            </div>
            <div className="carousel-controls">
              <button className="carousel-arrow left" onClick={handleBack}>
                <span className="text-none">Left</span>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button className="carousel-arrow right" onClick={handleNext}>
                <span className="text-none">Right</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>

          <div className="carousel-indicators">
            {project.pictures.map((_, index) => (
              <span
                key={index}
                className={`carousel-indicator ${index === currentIndex ? "active" : ""}`}
              />
            ))}
          </div>

          <FlippingCards
            project={{
              description: project.description,
              obstacle: project.obstacle,
              competences: project.competences
            }}
          />

          {project.githublink && (
            <a
              href={project.githublink}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link-button"
            >
              <FontAwesomeIcon icon={faGithub} className="github-icon" />
              Lien code GitHub
            </a>
          )}
        </div>
      )}
    </Modal>
  );
};

ModalProject.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string,
    obstacle: PropTypes.string,
    competences: PropTypes.arrayOf(PropTypes.string).isRequired,
    githublink: PropTypes.string,
  }),
};

export default ModalProject;