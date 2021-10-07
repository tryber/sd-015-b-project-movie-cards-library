// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
// import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    // const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div className="movie-card">
        <section className="movie-card-body">
          <h4 className="movie-card-title">{ movie.title }</h4>
          <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
          <p className="movie-card-storyline">{ movie.storyline }</p>
          <img className="movie-card-image" src={ movie.imagePath } alt={ movie.title } />
        </section>
        <section className="movie-card-rating">
          { movie.rating }
        </section>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  })
};

export default MovieCard;
