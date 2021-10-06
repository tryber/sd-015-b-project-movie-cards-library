import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const allMovies = movies.map((movie) => {
      return <MovieCard key={ movie.title } />;
    });

    return allMovies;
  }
}

export default MovieList;
