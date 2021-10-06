// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movies } = this.props;
    const { title, subtitle } = movies;
    return (
      <article>
        <p>{title}</p>
        <p>{subtitle}</p>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }).isRequired),
};

MovieCard.defaultProps = {
  movies: [],
};

export default MovieCard;
