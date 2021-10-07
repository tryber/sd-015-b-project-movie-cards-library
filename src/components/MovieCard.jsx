import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

export default class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props;
    return (
      <>
        <div className="movie-card">
          <img src={ imagePath } alt={ `${title} Movie` } />
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
        </div>
        <Rating rating={ rating } />
      </>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imagePath: PropTypes.string,
};

MovieCard.defaultProps = {
  imagePath: 'https://spassodourado.com.br/wp-content/uploads/2015/01/default-placeholder.png',
};
