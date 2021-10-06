// implement Header component here
import React from 'react';
import ReactPropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const {movies} = this.props;
    return (
      <header>
        <h1>Movie Cards Library</h1>
      </header>
    );
  }
}

export default Header;
