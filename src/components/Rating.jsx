import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react/cjs/react.production.min';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div>
        <p className="rating">{rating}</p>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
