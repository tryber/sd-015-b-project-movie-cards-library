// implement MovieList component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        {movie.map((element) => (
          <MovieCard
            movie={ element }
            key={ element.title }
          />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieList;
