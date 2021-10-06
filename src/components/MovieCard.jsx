// implement MovieCard component here
import React from 'react';
// import PropTypes from 'prop-tipes';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <article>
        <img src={ movie.imagePath } alt={ movie.title } />
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <p>{ movie.storyline }</p>


      </article>
    );
  }
}

export default MovieCard;
