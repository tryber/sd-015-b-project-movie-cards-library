import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <section>
        <MovieCard key="Movie Title 1" movie={ movies } />
        <MovieCard key="Movie Title 2" movie={ movies } />
        <MovieCard key="Movie Title 3" movie={ movies } />
      </section>
    );
  }
}

export default MovieList;
