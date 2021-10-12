import React from 'react';
import PropTypes from 'prop-types';

function Rating({ rating }) {
  return (
    <p>{rating}</p>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
