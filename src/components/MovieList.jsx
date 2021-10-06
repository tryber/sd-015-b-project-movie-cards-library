import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props;
    return (
      movies.map((movie) => {
        return <MovieCard key={ movie.title } movies={ movie } />
      })
    );
  }
}

export default MovieList;
