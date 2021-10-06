// implement MovieList component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieList.defaultProps = {
  movies: [
    {
      title: 'Final Fantasy',
      subtitle: 'Spirits Within',
      storyline: 'A scientist makes a last stand on Earth.',
      rating: 4.5,
      imagePath: 'images/Final_Fantasy_Spirits_Within.jpg',
    },
  ],
};

export default MovieList;
