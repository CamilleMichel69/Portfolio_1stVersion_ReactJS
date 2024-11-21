import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faScrewdriverWrench, faCode, faGraduationCap, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../style/components/header.scss';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <nav className="nav-bar">
                <ul className={isOpen ? "nav-links open" : "nav-links"}>
                    <li><a href="#home">
                        <span className="text-none">Accueil</span>
                        <FontAwesomeIcon icon={faHouse}/>
                        </a></li>
                    <li className="nav-item">
                        <a href="#skills" className="nav-link">
                            <span className="text">Compétences</span>
                            <FontAwesomeIcon icon={faScrewdriverWrench} className="icon" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-link">
                            <span className="text">Projets</span>
                            <FontAwesomeIcon icon={faCode} className="icon" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link">
                            <span className="text">A propos</span>
                            <FontAwesomeIcon icon={faGraduationCap} className="icon" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">
                            <span className="text">Contact</span>
                            <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        </a>
                    </li>
                </ul>
                <div className="hamburger" onClick={toggleMenu}>
                    &#9776;
                </div>
            </nav>
        </header>
    );
    
};

export default Header;
