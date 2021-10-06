import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import moviesData from './data';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
      <Header />
      <MovieList movies={ moviesData } />
    </div>
  );
}

export default App;
