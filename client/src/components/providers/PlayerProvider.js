import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PlayerContext = createContext();

export default function PlayerProvider(props) {
  const [state, setState] = useState({
    players: [],
    items: [],
  })

  useEffect(() => {
    Promise.all([
      axios.get("/party"),
      axios.get("/party/items")
    ]).then((all) => {
      setState(prev => ({...prev, players: all[0].data, items: all[1].data}));
    })
  }, []);

  const providerData = { state }

  return (
    <PlayerContext.Provider value={providerData}>
      { props.children }
    </PlayerContext.Provider>
  )
}