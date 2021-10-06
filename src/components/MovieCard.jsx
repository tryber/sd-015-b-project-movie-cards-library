import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div key={ subtitle }>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{storyline}</p>
        <img src={ imagePath } alt={ `Imagem do filme ${title}` } />
        <span>{rating}</span>
      </div>
    );
  }
}

const notFind = 'Não encontrado';

MovieCard.defaultProps = {
  movie: {
    title: notFind,
    subtitle: notFind,
    storyline: notFind,
    imagePath: notFind,
    rating: NaN,
  },
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }),
};

export default MovieCard;
