import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        {movies.map((movie) => <MovieCard key={ movie.title } movies={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
