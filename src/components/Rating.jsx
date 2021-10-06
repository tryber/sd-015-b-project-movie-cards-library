import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-card-rating">
        <p className="rating">{movies}</p>
      </div>
    );
  }
}

export default Rating;
