import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <main>
        {this.props.movie.map((obj) => (
          <MovieCard movie={obj} />
        ))}
      </main>
    );
  }
}

export default MovieList;
