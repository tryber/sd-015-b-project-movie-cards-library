import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
      <footer>Criado por: Gabriel Benedicto</footer>
    </div>
  );
}

export default App;
