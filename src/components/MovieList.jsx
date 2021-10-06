import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <>
        {movies.map((movie) => (
          <MovieCard movie={ movie } key={ movie.title } />
        ))}
      </>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(// ele recebe um arrayzão de objetos e por isso antes diz q é um array
    PropTypes.shape({ // é os objetos que compoem o array
      title: PropTypes.string, // o títilo é uma string
    }),
  ).isRequired,
};

export default MovieList;
