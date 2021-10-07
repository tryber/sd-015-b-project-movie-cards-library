// implement MovieCard component here
import React from 'react';
// import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <section className="movie-card-body">
          <h4 className="movie-card-title">{ movie.title }</h4>
          <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
          <p className="movie-card-storyline">{ movie.storyline }</p>
          <img className="movie-card-image" src={ movie.imagePath } alt={ movie.alt } />
        </section>
        <section className="movie-card-rating">
          { movie.rating }
        </section>
      </div>
    );
  }
}

export default MovieCard;
