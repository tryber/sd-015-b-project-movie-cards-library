import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <img src={ movie.imagePath } alt={ movie.title } />
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default MovieCard;
