import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <section className="movie-card-body">
        <section className="movie-card">
          <div>
            <img className="card-img" src={ movie.imagePath } alt={ `${movie.title}` } />
          </div>
          <div>
            <h4 className="movie-card-title">{ movie.title }</h4>
            <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
            <p className="movie-card-storyline">{ movie.storyline }</p>
          </div>
          <Rating rating={ movie.rating } />
        </section>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.string.isRequired,
};

export default MovieCard;
