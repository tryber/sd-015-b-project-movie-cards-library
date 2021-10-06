import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

const atualMovie = [];

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movie={ atualMovie } />
    </div>
  );
}

export default App;
