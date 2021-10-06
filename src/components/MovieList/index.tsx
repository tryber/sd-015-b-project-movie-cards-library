import React from 'react';
import './styles.scss';
import { MovieCard } from '../MovieCard';

interface Movie {
    title: string,
    subtitle: string,
    storyline: string,
    rating: number,
    imagePath: string,
}

interface MoviesProps {
  movies: Movie[]
}

export function MovieList(props: MoviesProps) {
  const { movies } = props;
  return (
    <main>
      {movies.map((movie: Movie) =>(
        <MovieCard key={movie.title} movie={ movie } />
      ))}
    </main>
  )

}
