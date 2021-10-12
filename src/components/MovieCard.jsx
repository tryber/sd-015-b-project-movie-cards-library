import React from 'react';
import PropTypes from 'prop-types';
// import movies from '../data';
// import MovieList from './MovieList';

class MovieCard extends React.Component {
  render() {
    const propEachMovie = this.props;
    const objPropEachMovie = propEachMovie.movies;
    return (
      <article>
        <img src={ objPropEachMovie.imagePath } alt="" />
        <p>{ objPropEachMovie.title }</p>
        <p>{ objPropEachMovie.subtitle }</p>
        <p>{ objPropEachMovie.storyline }</p>
        <p>{ objPropEachMovie.rating }</p>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
