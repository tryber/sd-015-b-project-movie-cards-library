import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <section className="movie-list">
          <MovieList />
        </section>
      </div>
    );
  }
}

export default App;
