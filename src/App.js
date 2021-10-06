import React from 'react';
import './App.css';
import Header from './components/Header';
import Movielist from './components/MovieList';
import movies from './data'

function App() {
  return (
    <div>
      <Header />
      <Movielist movies={ movies }/>
    </div>
  );
}
export default App;
