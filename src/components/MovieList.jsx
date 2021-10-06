// implement MovieList component here
import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <section>
        {movies.map((movie) => {
          return <MovieCard key={ movie.title } movie={ movie } />;
        })}
      </section>
    );
  }
}

export default MovieList;
