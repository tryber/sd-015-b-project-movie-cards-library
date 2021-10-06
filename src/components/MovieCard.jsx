import PropTypes from 'prop-types';
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;

    return (
      <div className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <span className="movie-card-rating "><Rating rating={ rating } /></span>
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number,
    storyline: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

Rating.defaultProps = {
  rating: 0,
};

export default MovieCard;
