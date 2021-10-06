// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <article>
        <h4>
          {movie.title}
        </h4>
        <h5>
          {movie.subtitle}
        </h5>
        <p>
          {movie.storyline}
        </p>
        <img src={ movie.imagePath } alt={ movie.title } />
      </article>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  })).isRequired,
};

export default MovieCard;
