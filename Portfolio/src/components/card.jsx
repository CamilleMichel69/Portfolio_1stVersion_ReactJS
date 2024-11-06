import PropTypes from 'prop-types';

function Card({ image, title }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card__img" />
      <div className="card__overlay"></div>
      <p className="card__title">{title}</p>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
