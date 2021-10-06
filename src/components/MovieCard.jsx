import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, imagePath, subtitle, storyline, rating } = movie;
    return (
      <div>
        <div>
          <h4>{ title }</h4>
          <h5>{ subtitle }</h5>
          <img src={ imagePath } alt={ title } />
          <p>{ storyline }</p>
        </div>
        <div>
          <Rating rating={ rating } />
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
