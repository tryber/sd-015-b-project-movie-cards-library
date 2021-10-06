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
const expectedObject = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number,
  imagePath: PropTypes.string.isRequired,
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(expectedObject)).isRequired,
};

export default MovieList;
