import React from 'react';
// import { v4 } from 'uuid';
// import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    // caso eu quisesse acrescentar Id nos objetos do arquivo data
    /*  const moviesWithId = movies.map((elMovie) => {
      elMovie.id = v4();
      return elMovie;
    }); */
    // console.log(moviesWithId);
    const { movies } = this.props;
    return (
      <section>
        {movies
          .map((elementMovies) => (
            <MovieCard key={ elementMovies.title } movies={ elementMovies } />
          ))}
      </section>
    );
  }
}
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  })).isRequired,
};
export default MovieList;
