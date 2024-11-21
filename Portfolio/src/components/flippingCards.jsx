import { useState } from "react";
import PropTypes from "prop-types";

const FlippingCards = ({ project }) => {
    const [flipped, setFlipped] = useState([false, false, false]);
  
    const handleFlip = (index) => {
      const newFlipped = [...flipped];
      newFlipped[index] = !newFlipped[index];
      setFlipped(newFlipped);
    };
  
    return (
      <div className="flipping-cards-container">
        {["Objectif du projet", "Obstacle & Solution", "Compétences associées"].map(
          (title, index) => (
            <div
              key={index}
              className={`flipping-card ${flipped[index] ? "flipped" : ""}`}
              onClick={() => handleFlip(index)}>
              <div className="flipping-card-inner">
                <div className="flipping-card-front">
                  <h3 className="card-title">{title}</h3>
                </div>
                  <div className="flipping-card-back">
                  {index === 2 ? (
                    <div className="competences-container">
                      {project.competences.map((competence, i) => (
                        <span key={i} className="competence-item">
                          {competence}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="card-text">
                      {index === 0 && project.description}
                      {index === 1 && project.obstacle}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    );
};  

FlippingCards.propTypes = {
    project: PropTypes.shape({
      description: PropTypes.string,
      obstacle: PropTypes.string,
      competences: PropTypes.arrayOf(PropTypes.string),
    }),
  };

export default FlippingCards;
