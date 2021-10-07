import React from 'react';
// import { v4 as generateId } from 'uuid';
import PropTypes from 'prop-types';

export default class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props;
    return (
      <div className="movieCard">
        <img src={ imagePath } alt={ `${title} Movie` } />
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <h4>{storyline}</h4>
        <span>{rating}</span>
      </div>
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
