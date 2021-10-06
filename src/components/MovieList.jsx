import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
// para todos os requesitos foram usados como consulta
// arquivos das aulas ao vivo:https://github.com/tryber/sd-015-b-live-lectures/pull/31
// E exercícios feito do course.
class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        { movies.map((items) => <MovieCard key={ items.title } movie={ items } />) }
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieList;
