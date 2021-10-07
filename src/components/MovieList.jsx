// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
const { movies } = this.props

    return (
      <section>
          {movies.map((movies) => {
            return <MovieCard key={movies.title} movie={movies}/>;
        })}
      </section>
    )
  }
}

export default MovieList;
