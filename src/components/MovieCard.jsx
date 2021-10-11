import React from 'react';

import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        <p>{movie.rating}</p>
        <img src={ movie.imagePath } alt={ movie.title } />
      </div>
    );
  }
}

export default MovieCard;
