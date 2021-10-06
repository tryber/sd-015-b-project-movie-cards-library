import React from 'react';

class MovieList extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <article>
        <img src={ movie.imagePath } alt="" />
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <p>{ movie.storyline }</p>
      </article>
    );
  }
}

export default MovieList;
