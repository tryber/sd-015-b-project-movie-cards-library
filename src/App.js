import React from 'react';
import './App.css';
import Hearder from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Hearder />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
