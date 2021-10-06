import React from 'react';
import MovieCard from './MovieCard';
// import movies from '../data';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    console.log(movies);
    return (
      <div>
        {movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />)}
      </div>
    );
  }
}

export default MovieList;
