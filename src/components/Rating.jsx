// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieRating extends React.Component {
    render() {
        const { rating } = this.props;
      return (
        <p className="rating"> { rating } </p>
      );
    }
  }
  
  export default MovieRating;
  