import React from 'react';

import './App.css';
// import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div>
      <h1>Filmes</h1>
      <MovieList />
    </div>
  );
}
export default App;
/*  <div className="App">
     <Header />
     <MovieList movies={ movies } />
   </div> */
