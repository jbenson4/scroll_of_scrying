import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Header from './components/Header';
import PlayerList from './components/PlayerList';


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <section>
        <PlayerList />
      </section>
    </div>
  );
}

export default App;
