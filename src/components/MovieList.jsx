import React from 'react';
import MovieCard from './MovieCard';
import '../App.css';

function MovieList({ movies }) {
  return (
    <div>
      {
        movies.map((movie) => (
          <MovieCard movie={ movie } />
        ))
      }
    </div>
  );
}

export default MovieList;
