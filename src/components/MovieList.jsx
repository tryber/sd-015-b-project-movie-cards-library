import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <article className="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </article>
    );
  }
}

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    }),
  ),
};

MovieList.defaultProps = {
  movies: [
    {
      title: 'Default',
      subtitle: 'Default',
      storyline: 'Default',
      rating: 0,
      imagePath: 'images/default.jpg',
    },
    {
      title: 'Default',
      subtitle: 'Default',
      storyline: 'Default',
      rating: 0,
      imagePath: 'images/default.jpg',
    },
  ],
};
