import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <img src={ movie.imagePath } alt={ movie.title } />
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object),
};

MovieCard.defaultProps = {
  movie: [],
};

export default MovieCard;
