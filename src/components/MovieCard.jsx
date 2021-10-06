import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    const rateNumber = rating;
    return (
      <div key={ subtitle } className="movie-card movie-card-body">
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <img src={ imagePath } alt={ `Imagem do filme ${title}` } className="card-img" />
        <Rating rating={ rateNumber } />
      </div>
    );
  }
}

const notFind = 'Não encontrado';

MovieCard.defaultProps = {
  movie: {
    title: notFind,
    subtitle: notFind,
    storyline: notFind,
    imagePath: notFind,
    rating: NaN,
  },
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }),
};

export default MovieCard;
