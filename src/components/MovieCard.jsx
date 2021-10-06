import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {  
  render() {
    return (
      this.props.movies.map((movie, i) => (
        <div className="movie-card" key={ i }>
          <img className="movie-card-image" src={movie.imagePath} alt={ `${movie.title} pic` } />
          <h4 className="movie-card-title">{movie.title}</h4>
          <h5 className="movie-card-subtitle">{movie.subtitle}</h5>
          <p className="movie-card-storyline">{movie.storyline}</p>
          <div className="movie-card-rating">
            <Rating rating={movie.rating} />
          </div>
        </div>
      ))
    );
  }
}

export default MovieCard;
