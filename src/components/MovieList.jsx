import React from 'react';
import movies from '../data';
// import { v4 as generateId } from 'uuid';
// import PropTypes  from 'prot-types';

class MovieList extends React.Component {
  render() {
    // const { title, subtitle, storyline, rating } = this.props;
    return (
      <span movies={ movies } />
    );
  }
}

export default MovieList;
