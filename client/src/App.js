import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import PlayerList from './components/PlayerList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section>
        <PlayerList />
      </section>
    </div>
  );
}

export default App;
