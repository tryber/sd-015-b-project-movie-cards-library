import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

export default class MovieList extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        {data.map((movie) => (
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
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imagePath: PropTypes.string,
  })),
};

MovieList.defaultProps = {
  data: 'data',
};
