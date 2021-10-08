import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { pontos } = this.props;
    return (
      <div>
        <span>Rating</span>
        <span>{pontos}</span>
      </div>
    );
  }
}

Rating.propTypes = {
  pontos: PropTypes.shape({
    rating: PropTypes.number,
  }).isRequired,
};

export default Rating;
