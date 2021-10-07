import React from 'react';
import './App.css';

import Header from './components/Header';
import MovieList from './components/MovieList';

import movies from './data';

function App() {
  return (
    <>
      <Header />
      <MovieList movies={ movies } />
    </>
  );
}

export default App;
