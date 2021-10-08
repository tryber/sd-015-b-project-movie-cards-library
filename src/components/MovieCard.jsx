import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Moviecard extends Component {
  render() {
    const { movies } = this.props;
    return (
      <article>
        <img src={ movies.imagePath } alt={ movies.title } />
        <h4>{ movies.title }</h4>
        <h5>{ movies.subtitle}</h5>
        <p>{ movies.storyline }</p>
      </article>
    );
  }
}

Moviecard.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  })).isRequired,
};

export default Moviecard;
