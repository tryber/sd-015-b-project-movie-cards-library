import React from 'react';
import PropTypes from 'prop-types';
import MovieCards from './MovieCard';
import '../App.css';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies
          .map((movie) => (<MovieCards
            movie={ movie }
            key={ movie.title }
          />))}
      </div>
    );
  }
}

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
