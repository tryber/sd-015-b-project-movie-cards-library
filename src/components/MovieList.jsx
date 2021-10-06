// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((elemento) => <MovieCard />)}
      </div>
    );
  }
}

export default MovieList;
