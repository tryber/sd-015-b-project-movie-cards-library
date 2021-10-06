import React from 'react';
import '../App.css';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
