import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { key, movie } = this.props;
    return (
      <li key={ key }>{ movie.title }</li>
    );
  }
}

MovieCard.propTypes = {
  key: PropTypes.string.isRequired,
  movie: PropTypes.objectOf.isRequired,
};

export default MovieCard;
