import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      movies.map((movie,
        index) => <MovieCard key={ `Movie Title ${index + 1}` } movie={ movie } />)
    );
  }
}
export default MovieList;
