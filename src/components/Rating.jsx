import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    return (
      <span>{ movie.rating } </span>
    );
  }
}

Rating.propTypes = {
  movie: PropTypes.shape({
    rating: PropTypes.number,
  }).isRequired,
};

export default Rating;
