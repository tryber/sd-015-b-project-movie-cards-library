import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class Moviecard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <article>
        <img src={ movie.imagePath } alt={ movie.title } />
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle}</h5>
        <p>{ movie.storyline }</p>
        <Rating rating={ movie.rating } />
      </article>
    );
  }
}

Moviecard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  })).isRequired,
};

export default Moviecard;
