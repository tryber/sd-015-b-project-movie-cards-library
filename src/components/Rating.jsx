// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">
        <p>
          { rating }
        </p>
      </div>
    );
  }
}

Rating.PropTypes = {
  rating: PropTypes.shape
}

export default Rating;
