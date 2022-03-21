import React, { useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Header from './components/Header';
import PlayerList from './components/PlayerList';
import Inventory from './components/Inventory';
import Dice from './components/Dice';


const TABS = {
  'party': <PlayerList />,
  'combat': <Inventory />,
  'notes': <Inventory />,
  'tables': <Inventory />
}

function App() {
  const [selectedTab, setSelectedTab] = useState('party');
  return (
    <div className="App">
      <Header />
      <Navbar setSelectedTab={setSelectedTab}/>
      <Dice />
      <section>
      {TABS[selectedTab]}
      </section>
    </div>
  );
}

export default App;
