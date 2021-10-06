import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {movies.map((elem) => <MovieCard key={ elem.title } movie={ elem } />)}
      </section>
    );
  }
}

export default MovieList;
