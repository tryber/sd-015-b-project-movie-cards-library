// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        {
          movies.map((movieCard) => (
            <MovieCard key={ movieCard.title } movie={ movieCard } />
          ))
        }
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieList;
