import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render () {
    return (
      <p>oi</p>
    )
  }
}

Rating.protoType = {
  movie: PropTypes.shape({
    rating: PropTypes.number,
  }).isRequired,
};

export default Rating;
