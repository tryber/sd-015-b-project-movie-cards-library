// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

export default function MovieList({ movies }) {
  const moviesList = movies;
  return (
    <div>
      {moviesList.map((movie) => <MovieCard movie={ movie } key={ movie.title } />)}
    </div>
  );
}
