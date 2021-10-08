// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {
          movies.map((movie) => (
            <MovieCard key={ movie.title } movie={ movie } />
          ))
        }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(//  recebe um array
    PropTypes.shape({ //  pega os objetos do array
      title: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieList;
