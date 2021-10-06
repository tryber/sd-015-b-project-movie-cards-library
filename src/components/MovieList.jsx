import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const movList = movies.map((element) => (
      <MovieCard key={ element.title } movie={ element } />
    ));
    return (<section className="movie-list">{movList}</section>);
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
