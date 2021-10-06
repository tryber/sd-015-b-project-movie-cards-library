import React from 'react';
import PropTypes from 'prop-types';
// import movies from '../data';

// const { rating } = movies;
class Rating extends React.Component {
  render() {
    return (
      <p className="rating">{this.props.rating}</p>
    );
  }
}

export default Rating;
