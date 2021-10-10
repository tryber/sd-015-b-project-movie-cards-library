import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Moviecard from './MovieCard';

class Movielist extends Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {movies.map((movie) => <Moviecard key={ movie.title } movies={ movie } />)}
      </section>
    );
  }
}

Movielist.propTypes = {
  movies: Proptypes.arrayOf(Proptypes.shape({
    title: Proptypes.string,
    subtitle: Proptypes.string,
  }).isRequired),
};
Movielist.defaultProps = {
  movies: [],
};

export default Movielist;
