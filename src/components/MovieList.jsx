import React from 'react';

class MovieList extends React.Component {
  render() {
    const {movies} = this.props 
    return (
      <article>
        <h2>{movies.title}</h2>
      </article>
    );
  }
}

export default MovieList;
