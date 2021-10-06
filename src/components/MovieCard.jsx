// implement MovieCard component here
import PropTypes from 'prop-types';
import React from 'react';
import Rating from './Rating';

export default class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section>
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <img src={ movie.imagePath }></img>
        <p>{ movie.storyline }</p>
        <Rating rating={ movie.rating } />
      </section>
    );
  }
}

MovieCard.PropTypes = {
  movie: PropTypes.objectOf(String).isRequired,
  rating: PropTypes.number.isRequired,
};
