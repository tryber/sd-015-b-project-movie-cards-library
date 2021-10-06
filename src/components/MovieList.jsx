import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <div>
        {movies.map((movie) => {
          return <MovieCard/>;
        })}
      </div>
    );
  }
}

export default MovieList;
