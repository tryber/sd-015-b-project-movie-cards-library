// implement MovieList component here
import React, { Component } from 'react';
import data from '../data';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return (
      <div>
        {data.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
