import React from 'react';
import MovieCard from './MovieCard'

class MovieList extends React.Component {
  render() {
    return(
      <main>
        {this.props.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </main>
    );
  }
}

export default MovieList;
