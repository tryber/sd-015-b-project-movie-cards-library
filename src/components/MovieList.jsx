import React from 'react';
import PropTypes from 'prop-types';
import MovieCards from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main className="movie-list ">
        {
          movies.map((movie) => (
            <MovieCards key={ movie.title } movie={ movie } />
          ))
        }
      </main>

    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })).isRequired,
};

export default MovieList;
