import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

export default class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <>
        <div className="movie-card">
          <img src={ imagePath } alt={ `${title} Movie` } />
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
        </div>
        <Rating rating={ rating } />
      </>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string,
  }).isRequired,
};
