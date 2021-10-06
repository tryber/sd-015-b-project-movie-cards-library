// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

function Rating({ rating }) {
  return (
    <div className="movie-card-rating">
      <p className="rating">{rating}</p>
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
