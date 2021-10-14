// Esqueci de comentar que utilizei o repositorio do denis para os meus estudos de PropTypes
// Peço perdão pelo vacilo. Repositorio do Denis: https://github.com/tryber/sd-015-b-project-movie-cards-library/pull/2/commits/744e2286ed57b8d28cabd1767298ab1ad7690359

import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath } = movie;
    return (
      <div>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <img src={ imagePath } alt="imagem do filme" />
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
  }).isRequired,
};
export default MovieCard;
