import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;

    return (
      <h6 className="rating">{ rating }</h6>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.string,
};

Rating.defaultProps = {
  rating: '0',
};

export default Rating;
