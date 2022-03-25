import React, { useContext, useEffect } from 'react';
import Player from './Player';
import './PlayerList.scss';
import { PartyContext } from '../providers/PartyProvider';

const PlayerList = () => {
  const { state } = useContext(PartyContext);
  return (
    <div className="PlayerList">
      {state.players !== undefined && state.players.map(player => <Player key={player.name} {...player}/>)}
    </div>
  )
}

export default PlayerList