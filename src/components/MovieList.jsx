import React from 'react';
import MovieCard from './MovieCard';
import '../App.css';

function MovieList({ movies }) {
  return (
    <div>
      {
        movies.map((movie) => (
          <MovieCard key={ movie.title } movie={ movie } />
        ))
      }
    </div>
  );
}

export default MovieList;
