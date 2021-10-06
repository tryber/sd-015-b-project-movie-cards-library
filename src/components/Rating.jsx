import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div>
        <h3 className="rating">{rating}</h3>
      </div>);
  }
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Rating;
