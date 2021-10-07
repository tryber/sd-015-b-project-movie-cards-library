import React from 'react';
import PropTypes from 'prop-types';

export default class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">
        <span>{rating}</span>
      </div>
    );
  }
}

Rating.propTypes = { rating: PropTypes.number.isRequired };
