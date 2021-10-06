// implement MovieList component here
import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <MovieCard movie={ movies.title } />
    );
  }
}

export default MovieList;
