import React from 'react';
import './Navbar.scss';

const Navbar = ({setSelectedTab, setCategory}) => {
  const groupFunctions = (event) => {
    const tab = event.target.innerText;
    if (tab === 'Inventory') {
      setSelectedTab('inventory');
      setCategory({
        data: {},
        index: 'magic-items'
      });
    } else if (tab === 'Combat') {
      setSelectedTab('combat');
      setCategory({
        data: {},
        index: 'monsters'
      });
    }
  };
  return (
    <div className="navbar">
      <span id="party-name">Company of the Yellow Banner</span>
      <nav>
        <ul>
          <li><button onClick={() => setSelectedTab('party')}>Party</button></li>
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

