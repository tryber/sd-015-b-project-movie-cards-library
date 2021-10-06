// implement MovieList component here
import React from 'react';
import movie from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <MovieCard movies={ movie.title } />
    );
  }
}

export default MovieList;
