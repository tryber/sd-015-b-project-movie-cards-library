import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <p>
          title:
          {movie.title}
        </p>
        <p>
          subtitle:
          {movie.subtitle}
        </p>
        <p>
          storyline:
          {movie.storyline}
        </p>
        <p>
          rating:
          {movie.rating}
        </p>
        <p>
          imagePath:
          {movie.imagePath}
        </p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.imagePath,
  }),
}

export default MovieCard;
