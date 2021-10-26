import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, imagePath } = movie;
    return (
      <div>
        <img src={ imagePath } alt={ title } />
        <h4>{title}</h4>
      </div>
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
