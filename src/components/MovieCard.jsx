import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { atual, key } = this.props;
    console.log(key);
    return (
      <article className="movie-card">
        <img src={ atual.imagePath } alt={ atual.title } />
        <h4>{ atual.title }</h4>
        <h5>{ atual.subtitle }</h5>
        <p>{ atual.storyline }</p>
        <p>{ atual.rating }</p>
      </article>
    );
  }
}

MovieCard.propTypes = {
  atual: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
  key: PropTypes.number.isRequired,
};
export default MovieCard;
