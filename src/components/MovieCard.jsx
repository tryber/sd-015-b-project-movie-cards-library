import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <article>
        <div>
          <img src={ movie.imagePath } alt={ `Imagem do cartaz de ${movie.subtitle}` } />
          <h4>{movie.title}</h4>
          <h5>{movie.subtitle}</h5>
          <p>{movie.storyline}</p>
        </div>
        <div>
          <h3>Rating</h3>
          <p>{movie.rating}</p>
        </div>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
