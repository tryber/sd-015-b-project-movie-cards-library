// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
// import Movies from '../data';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;

    return (
      <main>
        {movies.map((el) => <MovieCard movie={el}/>)}
      </main>
    )
  }
}

export default MovieList;
