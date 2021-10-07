import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <p className="paragrafo-rating">rating</p>
        <p className="rating">{ rating }</p>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Rating;
