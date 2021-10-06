import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <main>
        {movies.map((movie) => <MovieCard movie={movie} key={movie.title} />)}
      </main>
    );
  }
}

export default MovieList;
