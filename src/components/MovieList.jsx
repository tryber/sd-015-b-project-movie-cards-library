// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main>
        {movies.map((movieObj) => (
          <MovieCard key={ movieObj.title } movie={ movieObj } />
        ))}
      </main>
    );
  }
}

export default MovieList;
