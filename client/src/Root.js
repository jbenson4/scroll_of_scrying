import React, { useState } from 'react';
import './App.scss';
import PlayerProvider from './providers/PartyProvider';
import App from './App';


function Root() {

  return (
    <PlayerProvider>
     <App/>
    </PlayerProvider>
  );
}

export default Root;