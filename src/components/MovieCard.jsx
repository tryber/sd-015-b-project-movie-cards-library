import React, { Component } from 'react';

class MovieCard extends Component {
  render() {

    const { movie } = this.props;
    return (
      <section>
        <h4>{ movie.title }</h4>
        <img src={ movie.imagePath } alt={ movie.imagePath } />
        <div>
          <h5>{ movie.subtitle }</h5>
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
