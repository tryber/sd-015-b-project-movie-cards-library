import React from 'react';
import { Component } from 'react/cjs/react.production.min';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return console.log(movies);
  }
}

export default MovieList;
