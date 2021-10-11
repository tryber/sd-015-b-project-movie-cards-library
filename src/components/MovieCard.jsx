import React from 'react';

import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <p>{movie.title}</p>
        <p>{movie.subtitle}</p>
        <p>{movie.storyline}</p>
        <p>{movie.rating}</p>
      </div>
    );
  }
}

export default MovieCard;
