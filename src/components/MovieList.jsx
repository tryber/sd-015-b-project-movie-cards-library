// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <section>
        <h2>Este é o MovieList</h2>
        <MovieCard />
      </section>
    );
  }
}

export default MovieList;
