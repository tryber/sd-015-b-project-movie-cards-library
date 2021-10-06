import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Rating from './components/Rating';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
      <Rating movies={ movies } />
    </div>
  );
}
export default App;
