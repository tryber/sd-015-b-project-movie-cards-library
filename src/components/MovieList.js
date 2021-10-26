import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <section>{movies}</section>
    );
  }
}

export default MovieList;