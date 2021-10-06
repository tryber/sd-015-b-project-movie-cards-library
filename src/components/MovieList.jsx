import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

// implement MovieList component here
class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div>
        {movies.map((movie) => <MovieCard key={ movie.title } movies={ movie } />)}
      </div>
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
  }).isRequired),
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
