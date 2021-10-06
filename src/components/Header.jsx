// implement Header component here
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      React.createElement('header', null, <h1>Movie Cards Library</h1>)
    );
  }
}

export default Header;
