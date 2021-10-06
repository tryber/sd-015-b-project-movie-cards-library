import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <>
        <img src={ movie.imagePath } alt={ movie.title } />
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        <Rating rating={ movie.rating } />
      </>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({ // shape usado pra detalhar o objeto
    title: PropTypes.string, // o formato do titulo é string/texto
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
    // só coloca o que vai usar - minimalismo! =)
  }).isRequired,
};

export default MovieCard;
