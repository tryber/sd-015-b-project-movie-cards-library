import React from 'react';

export default class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    console.log(movie);
    return (
      <div>
        <img src={ movie.imagePath } alt={ movie.title }/>
      </div>
    );
  }
}
