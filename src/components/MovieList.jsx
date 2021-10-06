// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
    // {movies.map(movie => <MovieCard movie={movie} /> )}
      <MovieCard />
    );
  }
}

export default MovieList;
