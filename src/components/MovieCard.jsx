import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    // criando uma constante para receber a chave do props
    const { propMovies } = this.props;
    console.log(propMovies);
    return (
      <article>
        <img src={ propMovies.imagePath } alt={ propMovies.title } />
        <h4>{`Titulo: ${propMovies.title}`}</h4>
        <h5>{`Subtitulo: ${propMovies.subtitle}`}</h5>
        <p>{`Sinopse: ${propMovies.storyline}`}</p>
        <p>{`Rating: ${propMovies.rating}`}</p>
      </article>
    );
  }
}

MovieCard.propTypes = {
  propMovies: PropTypes.arrayOf(PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  })),
};
MovieCard.defaultProps = {
  propMovies: PropTypes.arrayOf(PropTypes.shape({
    imagePath: '',
    title: 'Sem conteudo',
    subtitle: 'sem conteudo',
    storyline: 'sem conteudo',
    rating: 0,
  })),
};
export default MovieCard;
