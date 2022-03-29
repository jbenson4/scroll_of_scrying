import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PartyContext = createContext();

export default function PartyProvider(props) {
  const [state, setState] = useState({
    players: [],
    items: [],
    conditions: [],
    monsters: [],
    notes: []
  })

  useEffect(() => {
    Promise.all([
      axios.get("/party"),
      axios.get("/party/items"),
      axios.get(`party/conditions`),
    ]).then((all) => {
      setState(prev => ({...prev, players: all[0].data, 
        items: all[1].data,
        conditions: all[2].data,
      }));
    })
  }, []);

  function deleteCondition(index, playerId) {
    const newConditions = state.conditions.filter(cond => !(cond.index === index && cond.player_id === playerId));
    return axios.delete(`/players/conditions/${playerId}/${index}`)
      .then(setState(
        {
          ...state,
          conditions: newConditions
        }
      ))
  }

  const providerData = { state, setState, deleteCondition }

  return (
    <PartyContext.Provider value={providerData}>
      { props.children }
    </PartyContext.Provider>
  )
}