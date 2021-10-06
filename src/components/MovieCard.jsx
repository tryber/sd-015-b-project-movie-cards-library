// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

// Greeting.propTypes = {
//   name: PropTypes.string,
//   lastName: PropTypes.string,
// };

function MovieCard({ movie, key }) {
  console.log(key);
  return (
    <div className="movie-card movie-card-body">
      <h4 className="movie-card-title">{movie.title}</h4>
      <h5 className="movie-card-subtitle">{movie.subtitle}</h5>
      <p className="movie-card-storyline">{movie.storyline}</p>
      <img src={ movie.imagePath } alt={ movie.title } className="movie-card-image" />
      <Rating rating={ movie.rating } />
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
  key: PropTypes.string,
};

MovieCard.defaultProps = {
  key: 'MovieTitle',
};

export default MovieCard;
