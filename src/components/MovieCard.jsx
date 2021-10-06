import React from 'react';
import movies from '../data';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    return (movies.map((movie) => (
      <div key={ movie.title } className="movie-card">
        <img
          className="movie-card-image"
          src={ movie.imagePath }
          alt={ movie.subtitle }
        />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ movie.title }</h4>
          <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
          <p className="movie-card-storyline">{ movie.storyline }</p>
        </div>
        <Rating movies={ movie.rating } />
      </div>
    )))
  }
}

export default MovieCard;
