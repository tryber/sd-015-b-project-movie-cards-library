import React from 'react';
import './App.css';
import Headers from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div>
      <Headers />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
