import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Moviecard extends Component {
  render() {
    return (
      <article>
        <img src={ this.props.imagePath } alt={ this.props.title } />
        <h4>{ this.props.title }</h4>
        <h5>{ this.props.subtitle}</h5>
        <p>{ this.props.storyline }</p>
      </article>
    );
  }
}

export default Moviecard;
