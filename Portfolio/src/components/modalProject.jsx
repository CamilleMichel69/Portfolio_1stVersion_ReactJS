import Modal from "react-modal";
import PropTypes from "prop-types";
import "../style/components/modal.scss"; 

const ModalProject = ({ isOpen, project, onClose }) => {
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
          <h2>{project.title}</h2>
          <img src={project.pictures} alt={`Cover of ${project.title}`} className="modal-image" />
          <p>{project.description}</p>
          <button onClick={onClose} className="modal-close-button">Fermer</button>
        </div>
      )}
    </Modal>
  );
};

// Validation des props
ModalProject.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  project: PropTypes.shape({
    title: PropTypes.string,
    pictures: PropTypes.string,
    description: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};

export default ModalProject;
