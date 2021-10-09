import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <p className='rating movie-card-rating'>{ rating }</p>
    );
  }
}

Rating.protoType = {
  movie: PropTypes.shape({
    rating: PropTypes.number,
  }).isRequired,
};

export default Rating;
