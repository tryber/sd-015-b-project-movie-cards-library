// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
// import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((show) => (
        <MovieCard
          key={ show.title }
          movie={ show }
        />))
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieList;
