import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <section>
        <MovieCard key="Movie Title 1" />
        <MovieCard key="Movie Title 2" />
        <MovieCard key="Movie Title 3" />
      </section>
    );
  }
}

export default MovieList;
