import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <MovieList movies={ movies } />
      </div>
    </div>
  );
}

export default App;
