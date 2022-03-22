import React, { useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Party from './components/Party';
import Dice from './components/Dice';


const TABS = {
  'party': <Party />,
  'combat': <Dice />,
  'notes': <Dice />,
  'tables': <Dice />
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
