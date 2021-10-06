// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main>
        <h1>arthur</h1>
        {movies.map((movieObj) => <MovieCard key={ movieObj.title } />)}
      </main>
    );
  }
}

export default MovieList;
