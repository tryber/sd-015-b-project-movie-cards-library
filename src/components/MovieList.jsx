// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;

    return (
      <main className="movie-list">
        {movies.map((el) => <MovieCard movie={el} key={el.title} />)}
      </main>
    );
  }
}

export default MovieList;
