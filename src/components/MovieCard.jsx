import React from 'react';
import PropTypes from 'prop-types';
// import movies from '../data';
// import MovieList from './MovieList';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <article>
        <img src={ movie.imagePath } alt="" />
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <p>{ movie.storyline }</p>
        <p>{ movie.rating }</p>
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
