import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { subtitle } = this.props;
    return (<li>{subtitle}</li>);
  }
}

MovieCard.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default MovieCard;
