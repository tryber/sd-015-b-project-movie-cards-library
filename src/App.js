import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
      <Footer />
    </div>
  );
}

export default App;
