import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "../style/components/modalProject.scss";

Modal.setAppElement("#root");

const ModalProject = ({ isOpen, project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0); // Reset l'index à 0 pour afficher la première image
    }
  }, [isOpen]);

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
          <h2 className="modal-title">{project.title}</h2>

          {/* Mini-carousel pour les images */}
          <div className="modal-carousel">
            <div className="carousel">
              {/* Conteneur div animé avec motion pour chaque image */}
              <motion.div
                className="carousel-image-container"
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
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
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button className="carousel-arrow right" onClick={handleNext}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>

            {/* Affichage du compteur d'images */}
            <div className="carousel-counter">
              <span>{currentIndex + 1}/{project.pictures.length}</span>
            </div>

          <p>{project.description}</p>
          <p>{project.competences}</p>
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
          <button onClick={onClose} className="modal-close-button">Fermer</button>
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
    competences: PropTypes.string,
    githublink: PropTypes.string,
  }),
};

export default ModalProject;