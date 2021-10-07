import React from 'react';
import { v4 as generateId } from 'uuid';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

export default class MovieList extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        {data.map((movie) => (
          <MovieCard
            key={ generateId() }
            subtitle={ movie.subtitle }
            imagePath={ movie.imagePath }
          >
            { movie.title }
          </MovieCard>
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
