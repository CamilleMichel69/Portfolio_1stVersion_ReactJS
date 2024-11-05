import Picture from '../images/profile-pic.png';
import'../style/components/description.scss';

const Description = () => {
    return (
        <div className="description">
            <img className="__img" src={Picture} alt="Photo de Camille MICHEL" />
            <div className="__paragraphe">
                <h1>Camille Michel</h1>
                <p>Concevoir, coder et innover pour un web meilleur.</p>
            </div>
        </div>
    )
};

export default Description;