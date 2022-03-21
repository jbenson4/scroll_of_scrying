import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Header from './components/Header';
import PlayerList from './components/PlayerList';
import Dice from './components/Dice';


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Dice />
      <section>
        <PlayerList />
      </section>
    </div>
  );
}

export default App;
