import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <img src={ movie.imagePath } alt="" />
        <p>{ movie.storyline }</p>
      </div>
    );
  }
}

export default MovieCard;
