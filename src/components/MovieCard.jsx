import React from 'react';

class MovieCard extends React.Component {
  render() {
    return (
      <div className='movie-card'>
        <h4>{this.props.movie.title}</h4>
        <img src={this.props.movie.imagePath} alt={this.props.movie.title} />
      </div>
    );
  }
}
