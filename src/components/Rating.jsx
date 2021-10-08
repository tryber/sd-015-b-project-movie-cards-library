import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div>
        <span>Rating</span>
        <span className="rating">{rating}</span>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.shape({
    rating: PropTypes.number,
  }).isRequired,
};

export default Rating;
