// implement MovieCard component here
import React from 'react';
// import movies from '../data';

// Função que renderiza os elementos
// function renderMovieCard() {

// }

class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <section className="movie-card-body">
          <h4 className="movie-card-title">Title</h4>
          <h5 className="movie-card-subtitle">Subtitle</h5>
          <p className="movie-card-storyline">Story Line</p>
          <img className="movie-card-image" src="" alt="Image"/>
        </section>
        <section className="movie-card-rating">
          Nota
        </section>
      </div>
    );
  }
}
  
export default MovieCard;
