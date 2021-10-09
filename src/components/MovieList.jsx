import React from 'react';
// import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {movies
          .map((elementMovie) => (
            <MovieCard key={ elementMovie.title } movies={ elementMovie } />
          ))}
      </section>
    );
  }
}
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieList;

// caso eu quisesse acrescentar Id nos objetos do arquivo data
/*  const moviesWithId = movies.map((elMovie) => {
  elMovie.id = v4();
  return elMovie;
}); */
// console.log(moviesWithId);
