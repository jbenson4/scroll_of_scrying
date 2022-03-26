import React, { useContext, useEffect } from 'react';
import Player from './Player';
import './PlayerList.scss';
import { PartyContext } from '../providers/PartyProvider';

const PlayerList = ({getDetails, setCategory}) => {
  const { state } = useContext(PartyContext);

  return (
    <div className="PlayerList">
      {state.players !== undefined && state.players.map(player => <Player key={player.name} getDetails={getDetails} setCategory={setCategory} {...player}/>)}
    </div>
  )
}

export default PlayerList