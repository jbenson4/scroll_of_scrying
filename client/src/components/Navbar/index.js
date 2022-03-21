import React from 'react';
import './Navbar.scss';

const Navbar = ({setSelectedTab}) => {
  return (
    <div class="navbar">
      <span id="party-name">Company of the Yellow Banner</span>
      <nav>
        <ul>
          <li><button onClick={() => setSelectedTab('party')}>Party</button></li>
          <li><button onClick={() => setSelectedTab('combat')}>Combat</button></li>
          <li><button onClick={() => setSelectedTab('notes')}>Notes</button></li>
          <li><button onClick={() => setSelectedTab('tables')}>Tables</button></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;

