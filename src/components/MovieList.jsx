import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((movie,
        index) => <MovieCard key={ `Movie Title ${index + 1}` } movie={ movie } />)
    );
  }
}
MovieList.propTypes = {
}.isRequired;

export default MovieList;
