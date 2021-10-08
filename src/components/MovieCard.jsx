import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    // criando uma constante para receber a chave do props
    const { movies } = this.props;
    // console.log(propMovies);
    return (
      <article>
        <img src={ movies.imagePath } alt={ movies.title } />
        <h4>{`Titulo: ${movies.title}`}</h4>
        <h5>{`Subtitulo: ${movies.subtitle}`}</h5>
        <p>{`Sinopse: ${movies.storyline}`}</p>
        <p>{`Rating: ${movies.rating}`}</p>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  })),
};
MovieCard.defaultProps = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    imagePath: '',
    title: 'Sem conteudo',
    subtitle: 'sem conteudo',
    storyline: 'sem conteudo',
    rating: 0,
  })),
};
export default MovieCard;
