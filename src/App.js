import './App.css';
import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="movie-list">
        <MovieList />
      </main>
    </div>
  );
}

export default App;
