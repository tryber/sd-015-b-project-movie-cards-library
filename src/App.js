import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
// import Rating from './components/Rating';
import Movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ Movies } />
    </div>
  );
}

export default App;
