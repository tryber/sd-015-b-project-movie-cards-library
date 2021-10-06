import PropTypes from 'prop-types';
import React from 'react';
import MovieCard from './MovieCard';
// import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      movies.map((movie, index) => (
        <MovieCard
          key={ movies[index].title }
          movie={ movie }
        />))
    );
  }
}
MovieList.propTypes = {
  movies: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

export default MovieList;
