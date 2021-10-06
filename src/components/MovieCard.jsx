import PropTypes from 'prop-types';
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props; // movies object
    return (
      <div className="movie-card">
        <img src={ movie.imagePath } alt="movie" className="movie-card-image" />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.isRequired,
};

export default MovieCard;
