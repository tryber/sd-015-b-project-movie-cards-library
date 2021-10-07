import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie, key } = this.props;
    console.log(key);
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <article className="movie-card">
        <div className="movie-card-body">
          <img className="movie-card-image" src={ imagePath } alt={ title } />
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
          <div>
            <Rating rating={ rating } className="movie-card-rating rating" />
          </div>
        </div>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
  key: PropTypes.string.isRequired,
};
export default MovieCard;
