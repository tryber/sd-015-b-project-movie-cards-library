// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, imagePath, storyline, rating } = movie;
    return (
      <article>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <img src={ imagePath } alt={ title } />
        <p>{storyline}</p>
        <Rating rating={ rating } />
      </article>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};
export default MovieCard;
