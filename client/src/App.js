import React, { useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Party from './components/Party';
import Dice from './components/Dice';
import Notes from './components/Notes';
import Tables from './components/Tables';
import PlayerProvider from './providers/PartyProvider';
import useRollTableData from './hooks/useRollTableData';
import useElementDetails from './hooks/useElementDetails';
import Modal from './components/Modal';

function App() {
  const { category, setCategory, setTableCategory, setTableLength, categoryItems } = useRollTableData();
  const { details, getDetails, showModal } = useElementDetails();
  const TABS = {
    'party': <Party />,
    'combat': <Dice />,
    'notes': <Notes />,
    'tables': <Tables
    category={category}
    setCategory={setCategory}
    setTableCategory={setTableCategory}
    setTableLength={setTableLength}
    categoryItems={categoryItems}
    getDetails={getDetails}
    showModal={showModal}
    />
  }

  const [selectedTab, setSelectedTab] = useState('party');
  return (
    <PlayerProvider>
      <div className="App">
        <Header />
        <Navbar setSelectedTab={setSelectedTab}/>
        <Dice />
        <Modal show={details.show} details={details.data} showModal={showModal} category={category.index} />
        <section>
        {TABS[selectedTab]}
        </section>
      </div>
    </PlayerProvider>
  );
}

export default App;
