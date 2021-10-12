// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const {
      movie: {
        title,
        subtitle,
        storyline,
        imagePath,
        rating,
      },
    } = this.props;
    return (
      <div>
        <p>{title}</p>
        <p>{subtitle}</p>
        <p>{storyline}</p>
        <img src={ imagePath } alt={ title } />
        <p>{rating}</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape(
    {
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    },
  ).isRequired,
};

export default MovieCard;
