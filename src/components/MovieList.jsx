import React from 'react';
import PropTypes from 'prop-types';
// import movies from '../data'

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <li>{movies}</li>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};

export default MovieList;
