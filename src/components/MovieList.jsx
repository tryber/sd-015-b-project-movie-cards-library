import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    const mappedMovies = movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />);

    return (
      <div>
        {mappedMovies}
      </div>
    );
  }
}

export default MovieList;
