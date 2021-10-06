import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    console.log(movie);
    return (
      <section>
        <img src={ movie.imagePath } alt={ movie.title } />
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
      </section>
    );
  }
}

export default MovieCard;
