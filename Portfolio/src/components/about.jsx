const About = () => {
    return (
        <section id="about" className="about">
            <h2>A PROPOS</h2>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-point"></div>
                    <div className="timeline-card top">
                        <h3>2014 - 2016</h3>
                        <h4>ISCOM</h4>
                        <p>BTS Communication</p>
                        <div className="missions">
                            <ul>
                                <li>Stratégie de communication</li>
                                <li>Création de supports</li>
                                <li>Relations commerciales</li>
                                <li>Culture de communication</li>
                                <li>Organisation événementielle</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-point"></div>
                    <div className="timeline-card bottom">
                        <h3>2016 - 2020</h3>
                        <h4>OLYMPIQUE LYONNAIS</h4>
                        <p>Service Client - Billetterie</p>
                        <div className="missions">
                            <ul>
                                <li>Responsable clients PSH</li>
                                <li>Gestion litiges</li>
                                <li>Adaptabilité événementielle</li>
                                <li>Vente billets et abonnements</li>
                                <li>Gestion comptes clients</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-point"></div>
                    <div className="timeline-card top">
                        <h3>2021</h3>
                        <h4>LCL</h4>
                        <p>Expert Banque et Assurance</p>
                        <div className="missions">
                            <ul>
                                <li>Ouverture comptes en ligne</li>
                                <li>Vérifications identitaires</li>
                                <li>Conseils banque et assurance</li>
                                <li>Conseils solutions digitales</li>
                                <li>Prospection</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-point"></div>
                    <div className="timeline-card bottom">
                        <h3>2021 - 2023</h3>
                        <h4>GOSTUDENT</h4>
                        <p>Customer Service Manager</p>
                        <div className="missions">
                            <ul>
                                <li>Responsable recherche tuteur</li>
                                <li>Gestion comptes clients</li>
                                <li>Gestion litiges clients/tuteurs</li>
                                <li>Rétention</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-point"></div>
                    <div className="timeline-card top">
                        <h3>2024</h3>
                        <h4>OPENCLASSROOM</h4>
                        <p>Diplôme Développeur Web</p>
                        <div className="missions">
                            <ul>
                                <li>HTML/CSS/JavaScript</li>
                                <li>Font-End - React.js</li>
                                <li>Back-End - Express de Node.js</li>
                                <li>Optimisation et débugging</li>
                                <li>Gestion de projet</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
