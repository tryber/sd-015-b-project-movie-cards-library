import React from 'react';
// import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main>
        {movies.map((movie) => <MovieCard key={ movie.title } film={ movie } />) }
      </main>
    );
  }
}

export default MovieList;
