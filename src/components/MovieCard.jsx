import React from 'react';
import Rating from './Rating';

class MovieCards extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <img src={ movie.imagePath } alt={ movie.title } />
        <article>
          <h4>{movie.title}</h4>
          <h5>{movie.subtitle}</h5>

          <p>{movie.storyline}</p>
        </article>

        <div>
          <Rating rating={ movie.rating } />
        </div>
      </div>
    );
  }
}

export default MovieCards;
