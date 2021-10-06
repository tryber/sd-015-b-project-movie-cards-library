// implement MovieCard component here
import React, { Component } from 'react';

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

export default MovieCard;
