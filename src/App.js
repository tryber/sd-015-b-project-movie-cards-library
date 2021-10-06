import React from 'react';
import './App.css';
import movies from './data';
import MovieList from './components/MovieList';

function App() {
  return (
    <MovieList movies={ movies } />
  );
}

export default App;
