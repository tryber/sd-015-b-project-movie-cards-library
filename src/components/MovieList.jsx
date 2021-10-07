import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

export default class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie) => (
          <MovieCard
            key={ movie.title }
            title={ movie.title }
            subtitle={ movie.subtitle }
            storyline={ movie.storyline }
            rating={ movie.rating }
            imagePath={ movie.imagePath }
          />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imagePath: PropTypes.string,
  })),
};

MovieList.defaultProps = {
  movies: 'data',
};
