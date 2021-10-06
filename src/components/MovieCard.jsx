import React, { Component } from 'react';
import Rating from './Rating';

class MovieCard extends Component {
  render() {

    const { movie } = this.props;
    return (
      <section>
        <h4>{ movie.title }</h4>
        <img src={ movie.imagePath } alt={ `Imagem do filme ${movie.title}` } />
        <div>
          <h5>{ movie.subtitle }</h5>
          <p>{ movie.storyline }</p>
        </div>
        <div>
          <Rating rating={ movie.rating } />
        </div>
      </section>
    );
  }
}

export default MovieCard;
