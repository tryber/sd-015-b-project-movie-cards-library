// implement MovieCard component here
import React from 'react';
import movie from '../data';

class MovieCard extends React.Component {
  render() {
    return (
      movie.map((elemento) => (
        <section key={ elemento.title }>
          <h4>
            { elemento.title }
          </h4>
          <h5>
            { elemento.subtitle }
          </h5>
          <p>
            {elemento.storyline}
          </p>
          <img src={ elemento.imagePath } alt={ elemento.title } />
        </section>
      )));
  }
}

export default MovieCard;
