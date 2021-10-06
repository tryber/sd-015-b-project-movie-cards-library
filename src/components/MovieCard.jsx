import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Moviecard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <article>
        <img src= { movie.imagePath } alt={ movie.title} />
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle}</h5>
        <p>{ movie.storyline }</p>
      </article>
    );
  }
}

Moviecard.prototype = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }).isRequired),
};

Moviecard.defaulProps = {
  movies: [],
};

export default Moviecard;
