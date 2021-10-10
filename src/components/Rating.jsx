// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <section>
        <h1 className="rating">
          {rating}
        </h1>
      </section>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};
Rating.defaultProps = {
  rating: 3,
};

export default Rating;
