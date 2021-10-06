import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div>
        <p>title: {title}</p>
        <p>subtitle: {subtitle}</p>
        <p>storyline: {storyline}</p>
        <p>rating: {rating}</p>
        <p>imagePath: {imagePath}</p>
      </div>
    );
  }
}

export default MovieCard;
