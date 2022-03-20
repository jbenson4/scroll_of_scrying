import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div class="navbar">
      <span id="party-name">Company of the Yellow Banner</span>
      <nav>
        <ul>
          <li><button>Party</button></li>
          <li><button>Combat</button></li>
          <li><button>Notes</button></li>
          <li><button>Tables</button></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;

