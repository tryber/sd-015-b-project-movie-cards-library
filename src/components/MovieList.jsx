import React from 'react';
import MovieCards from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((movie) => <MovieCards movie={ movie } key={ movie.title } />)
    );
  }
}

export default MovieList;
