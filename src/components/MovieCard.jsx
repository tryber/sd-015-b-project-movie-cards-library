import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

// para todos os requesitos foram usados como consulta
// arquivos das aulas ao vivo:https://github.com/tryber/sd-015-b-live-lectures/pull/31
// E exercícios feito do course.
class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <article>
        <img src={ imagePath } alt={ title } />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={ rating } />
      </article>
    );
  }
}
//  Acessado o repositório: https://github.com/tryber/sd-014-b-project-movie-cards-library/blob/Jo%C3%A3oHenrique-movie-cards-library/src/App.js
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
