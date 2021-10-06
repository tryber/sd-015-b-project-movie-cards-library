import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Moviecard extends Component {
  render() {
    const { movies } = this.props;
    const { title, subtitle } = movies;
    return (
      <article>
        <p>{title}</p>
        <p>{title}</p>
      </article>
    );
  }
}

Moviecard.prototype = {
    movies: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
    }).isRequired),
};

Moviecard.defaulProps = {
    movies: [],
};

export default Moviecard;