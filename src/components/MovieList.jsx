// Esqueci de comentar que utilizei o repositorio do denis para os meus estudos de PropTypes
// Peço perdão pelo vacilo. Repositorio do Denis: https://github.com/tryber/sd-015-b-project-movie-cards-library/pull/2/commits/3b7d41eca3c039becb015305151b6edea08aaf53

import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((element) => (<MovieCard key={ element.title } movie={ element } />))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
export default MovieList;
