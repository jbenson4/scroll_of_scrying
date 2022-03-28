import React, { useState, useContext } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Party from './components/Party';
import Dice from './components/Dice';
import Notes from './components/Notes';
import Tables from './components/Tables';
import Inventory from './components/Inventory';
import useRollTableData from './hooks/useRollTableData';
import useElementDetails from './hooks/useElementDetails';
import Modal from './components/Modal';
import Combat from './components/Combat/Combat.js'
import { PartyContext } from './providers/PartyProvider';

function App() {
  const { state, setState } = useContext(PartyContext);
  const { category, setCategory, setTableCategory, setTableLength, monsters, items, npcs, rollFunction } = useRollTableData();
  const { details, getDetails, hideModal } = useElementDetails();
  const TABS = {
    'party': <Party getDetails={getDetails} setCategory={setCategory} />,
    'inventory': <Inventory 
      getDetails={getDetails}
    />,
    'combat': <Combat
    getDetails={getDetails}
    players={state.players}
    />,
    'notes': <Notes />,
    'tables': <Tables
      category={category}
      setCategory={setCategory}
      setTableCategory={setTableCategory}
      setTableLength={setTableLength}
      getDetails={getDetails}
      hideModal={hideModal}
      npcs={npcs}
      monsters={monsters}
      items={items}
      rollFunction={rollFunction}
    />
  }

  const overlay = details.show ? 'overlay-active' : 'overlay-inactive';

  const [selectedTab, setSelectedTab] = useState('party');
  return (
      <div className="App">
        <Header />
        <Navbar setSelectedTab={setSelectedTab} setCategory={setCategory} />
        <Dice />
        <Modal show={details.show} details={details.data} hideModal={hideModal} category={category.index} />
        <section>
        {TABS[selectedTab]}
        </section>
        <div className={overlay}></div>
      </div>
  );
}

export default App;
