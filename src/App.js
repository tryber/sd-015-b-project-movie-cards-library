import './App.css';
import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieCard';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
    </div>
  );
}

export default App;
