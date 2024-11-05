import { useState } from 'react';
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
                    <li><a href="#home">Accueil</a></li>
                    <li><a href="#projects">Projets</a></li>
                    <li><a href="#skills">Compétences</a></li>
                    <li><a href="#about">À propos</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="hamburger" onClick={toggleMenu}>
                    &#9776;
                </div>
            </nav>
        </header>
    );
};

export default Header;
