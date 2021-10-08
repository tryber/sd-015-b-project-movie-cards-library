import React from 'react';
// import { v4 } from 'uuid';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    // caso eu quisesse acrescentar Id nos objetos do arquivo data
    /*  const moviesWithId = movies.map((elMovie) => {
      elMovie.id = v4();
      return elMovie;
    }); */

    // console.log(moviesWithId);
    return (
      <section>
        {movies
          .map((elementMovies) => (
            <MovieCard key={ elementMovies.title } propMovies={ elementMovies } />
          ))}
      </section>
    );
  }
}
export default MovieList;
