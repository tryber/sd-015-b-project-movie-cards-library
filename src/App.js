import React from 'react';
import './App.css';
import movies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';
// import MovieCard from './components/MovieCard';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
      {/* <MovieCard coment={ coment } /> */}
    </div>
  );
}

export default App;
