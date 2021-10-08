import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Moviecard extends Component {
  render() {
    const { movies } = this.props;
    return (
      <article>
        <img src={ movies.imagePath } alt={ movies.title } />
        <h4>{ movies.title }</h4>
        <h5>{ movies.subtitle}</h5>
        <p>{ movies.storyline }</p>
      </article>
    );
  }
}

export default Moviecard;
