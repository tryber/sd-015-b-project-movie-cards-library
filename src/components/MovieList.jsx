import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    const actualMovie = (movie) => <MovieCard key={ movie.title } movie={ movie } />;
    const mappedMovies = movies.map(actualMovie);

    return (
      <div>
        {mappedMovies}
      </div>
    );
  }
}

export default MovieList;
