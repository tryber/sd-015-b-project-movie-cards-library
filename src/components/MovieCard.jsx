import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import '../App.css';

function MovieCard({ movie: { title, subtitle, storyline, rating, imagePath } }) {
  return (
    <section className="movie-card">
      <div className="movie-card-body">
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
      </div>
      <div>
        <Rating />
      </div>
    </section>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
