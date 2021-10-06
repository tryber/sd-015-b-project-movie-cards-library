import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="movie-card-header">
        <h1>Movie Cards Library</h1>
        <span role="img" aria-label="Projetor">📽️</span>
      </header>
    );
  }
}

export default Header;
