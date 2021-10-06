import React from 'react';
import Header from './components/Header/index.tsx';
import MovieList from './components/MovieList/index.tsx';
import movies from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
