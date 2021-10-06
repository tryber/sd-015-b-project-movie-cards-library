// implement MovieList component here
import React, { Component } from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

export default class MovieList extends Component {
  render() {
    return (
      <section className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard key={ `Movie Title ${index}` } movie={ movie } />
        ))}
      </section>
    );
  }
}
