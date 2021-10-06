import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <main>
        {movies.map((movie) => <MovieCard movieData={ movie } key={ movie.title } />)}
      </main>
    );
  }
}

export default MovieList;
