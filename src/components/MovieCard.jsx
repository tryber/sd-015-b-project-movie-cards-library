import React from 'react';
import { title, subtitle, storyline, imagePath } from 'prop-types';

class MovieCard extends React.Component {
  render() {
    return (
      <section>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
      </section>
    );
  }
}

export default MovieCard;
