// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((filmes) => <MovieCard key={ filmes } />)}
      </div>
    );
  }
}

export default MovieList;
