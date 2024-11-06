import '../style/components/skills.scss';

const Skills = () => {
    return (
        <section id="skills" className="skills">
                <h2>COMPETENCES</h2>
                    <div className="skills-box-1">
                        <div className='skills-card'>
                            <h3>Développement Front-End</h3>
                            <p>HTML, CSS, JavaScript, React.js</p>
                        </div>
                        <div className='skills-card'>
                            <h3>Développement Back-End</h3>
                            <p>Node.js, Express, API REST avec CRUD</p>
                        </div>
                    </div>
                    <div className="skills-box-2">
                        <div className='skills-card'>
                            <h3>SEO et Accessibilité</h3>
                            <p>Référencement SEO, extensions d’accessibilité</p>
                        </div>
                        <div className='skills-card'>
                            <h3>Gestion de Projet</h3>
                            <p>Méthode Agile (SCRUM), planification de projet</p>
                        </div>
                        <div className='skills-card'>
                            <h3>Débugging et Optimisation</h3>
                            <p>Debugging, optimisation de performance</p>
                        </div>
                    </div>
        </section>
    )
};

export default Skills;