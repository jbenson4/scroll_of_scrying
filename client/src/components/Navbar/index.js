import React from 'react';
import './Navbar.scss';

const Navbar = ({setSelectedTab, setCategory}) => {
  const groupFunctions = (event) => {
    const tab = event.target.innerText;
    if (tab === 'Inventory') {
      setSelectedTab('inventory');
      setCategory((prev) => ({
        ...prev,
        index: 'magic-items'
      }));
    } else if (tab === 'Combat') {
      setSelectedTab('combat');
      setCategory((prev) => ({
        ...prev,
        index: 'monsters'
      }));
    } else if (tab === 'Party') {
      setSelectedTab('party');
      setCategory((prev) => ({
        ...prev,
        index: 'conditions'
      }));
    }
  };
  return (
    <div className="navbar">
      <span id="party-name">Company of the Yellow Banner</span>
      <nav>
        <ul>
          <li><button onClick={(event) => groupFunctions(event)}>Party</button></li>
          <li><button onClick={(event) => groupFunctions(event)}>Inventory</button></li>
          <li><button onClick={(event) => groupFunctions(event)}>Combat</button></li>
          <li><button onClick={() => setSelectedTab('notes')}>Notes</button></li>
          <li><button onClick={() => setSelectedTab('tables')}>Tables</button></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;

