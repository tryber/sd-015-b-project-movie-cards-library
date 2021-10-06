import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const movies = this.props.movies;
    return (
      movies.map((element, index) => (
        <section key={ index }>
          <MovieCard movie={ element } />
        </section>
      ))
    )
  }
}

export default MovieList;
