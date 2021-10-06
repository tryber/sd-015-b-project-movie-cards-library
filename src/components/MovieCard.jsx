import React from 'react';

class MovieCard extends React.Component {
  render() {
    const movie = this.props.movie;
    return (
      <div>
        <h1>{movie.title}</h1>
        <h2>{movie.subtitle}</h2>
        <p>{movie.storyline}</p>
        <p>Rating: {movie.rating}</p>
      </div>
    );
  }
}

export default MovieCard;
