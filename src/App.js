import React from 'react';
import './App.css';
import moviesArray from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ moviesArray } />
    </div>
  );
}

export default App;
