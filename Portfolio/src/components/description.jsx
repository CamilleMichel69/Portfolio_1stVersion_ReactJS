import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Picture from '../images/profile-pic.png';
import'../style/components/description.scss';

const Description = () => {
    return (
        <section id="home" className="description">
            <img className="__img" src={Picture} alt="Photo de Camille MICHEL" />
            <div className="__paragraphe">
                <h1>Camille Michel</h1>
                <h2>Concevoir, coder et innover pour un web meilleur.</h2>
                <p>Après 7 années passées à écouter et accompagner les utilisateurs, je me suis naturellement tournée vers le développement web pour concevoir des solutions à leur image.</p>
                <div className="social-buttons">
                    <a href="https://github.com/CamilleMichel69" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/camille-michel-a4364aa0/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                    </a>
                    <a href="#contact">
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                    </a>
                </div>
            </div>
        </section>
    )
};

export default Description;