// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movies } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movies;
    return (
      <article>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <h3>{storyline}</h3>
        <p>{rating}</p>
        <img src={ imagePath } alt={ title } />
      </article>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired),
};

MovieCard.defaultProps = {
  movies: [],
};

export default MovieCard;
