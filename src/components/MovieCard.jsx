// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <article className="movie-card">
        <div className="movie-card-body">
          <img className="movie-card-image" src={ movie.imagePath } alt={ movie.title } />
          <h4 className="movie-card-title">
            {movie.title}
          </h4>
          <h5 className="movie-card-subtitle">
            {movie.subtitle}
          </h5>
          <p className="movie-card-storyline">
            {movie.storyline}
          </p>
          <div className="movie-card-rating"><Rating rating={ movie.rating } /></div>
        </div>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  })).isRequired,
};

export default MovieCard;
