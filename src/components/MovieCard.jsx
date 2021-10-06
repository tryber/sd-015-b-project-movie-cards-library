import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    console.log(movie);
    return (
      <section>
        <img src={ movie.imagePath } alt={ movie.title } />
      </section>
    );
  }
}

export default MovieCard;
