import React from 'react';
import '../App.css';
import Header from './Header';
import MovieList from './MovieList';
import movies from '../data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="movie-list">
          <MovieList movies={ movies } />
        </main>
      </div>
    );
  }
}

export default App;
