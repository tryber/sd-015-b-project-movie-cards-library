import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
// import movies from '../data';
// import MovieList from './MovieList';
// usei https://github.com/tryber/sd-015-b-project-movie-cards-library/pull/141 para entender melhor o propTypes

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <article className="movie-card">
        <img className="movie-card-image" src={ movie.imagePath } alt="" />
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <p>{ movie.storyline }</p>
        <Rating rating={ movie.rating } />
      </article>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
