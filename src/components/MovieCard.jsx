// implement MovieCard component here
import PropTypes from 'prop-types';
import React from 'react';
import Rating from './Rating';

export default class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section className="movie-card">
        <img src={ movie.imagePath } className="movie-card-image" alt={ movie.title } />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ movie.title }</h4>
          <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
          <p className="movie-card-storyline">{ movie.storyline }</p>
        </div>
        <div className="movie-card-rating">
          <Rating rating={ movie.rating } />
        </div>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    rating: PropTypes.number,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }),
};

MovieCard.defaultProps = {
  movie: PropTypes.shape({
    rating: 0,
  }),
};
