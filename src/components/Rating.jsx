// implement Rating component here
import PropTypes from 'prop-types';
import React from 'react';

export default class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <span className="rating" key={ rating }>{rating}</span>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 0,
};
