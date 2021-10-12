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
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
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
