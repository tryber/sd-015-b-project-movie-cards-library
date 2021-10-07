import React from 'react';
import '../App.css';

function MovieCard({ movie: { title, subtitle, storyline, imagePath } }) {
  return (
    <section className="movie-card">
      <div className="movie-card-body">
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
      </div>
    </section>
  );
}

export default MovieCard;
