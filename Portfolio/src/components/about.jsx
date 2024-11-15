import '../style/components/about.scss';

const About = () => {
    return (
        <section id="about" className='about'>
            <div>
                <h2>A PROPOS DE MOI</h2>
                <div className='about-box'>
                    <h3>OPENCLASSROOM</h3>
                    <p>Diplôme Développement Web</p>
                </div>
                <div className='about-box'>
                    <h3>BTS COMMUNICATION</h3>
                    <p>Diplôme Développement Web</p>
                </div>
                <h4>Mais aussi...</h4>
                <div className='about-box'>
                    <h3>EXPERIENCE</h3>
                    <p>7 ans d&apos;expérience en Service Client</p>
                </div>
            </div>
        </section>
    )
};

export default About;