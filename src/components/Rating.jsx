import React from 'react';
import '../data';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <span>
        {rating}
      </span>
    );
  }
}

Rating.defaultProps = {
  rating: 0,
};

Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
