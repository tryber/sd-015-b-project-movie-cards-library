// implement MovieList component here

import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        {movie.map((mov) => <MovieCard key={ mov.title } movie={ mov } />)}
      </div>
    );
  }
}

export default MovieList;
