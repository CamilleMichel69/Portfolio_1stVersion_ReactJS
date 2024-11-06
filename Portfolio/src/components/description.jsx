import Picture from '../images/profile-pic.png';
import'../style/components/description.scss';

const Description = () => {
    return (
        <section id="home" className="description">
            <img className="__img" src={Picture} alt="Photo de Camille MICHEL" />
            <div className="__paragraphe">
                <h1>Camille Michel</h1>
                <p>Concevoir, coder et innover pour un web meilleur.</p>
            </div>
        </section>
    )
};

export default Description;