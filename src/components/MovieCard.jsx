import React, { Component } from 'react';

class MovieCard extends Component {
  render() {

    const { movie } = this.props;
    return (
      <section>
        <h2>{ movie.title }</h2>
        <img src={ movie.imagePath } alt={ movie.imagePath } />
        <div>
          <h3>{ movie.subtitle }</h3>
          <p>{ movie.storyline }</p>
        </div>
        <div>
          { movie.rating }
        </div>
      </section>
    );
  }
}

export default MovieCard;
