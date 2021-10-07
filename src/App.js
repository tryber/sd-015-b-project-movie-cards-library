import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <section className="movie-list">
          <MovieList movies={ movies } />
        </section>
      </div>
    );
  }
}

export default App;
