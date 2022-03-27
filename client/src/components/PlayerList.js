import React, { useContext } from 'react';
import Player from './Player';
import './PlayerList.scss';
import { PartyContext } from '../providers/PartyProvider';

const PlayerList = ({getDetails, setCategory}) => {
  const { state } = useContext(PartyContext);

  const conditionFilter = (conditions, player) => {
   return conditions.filter(condition => condition.player_id === player.id)
  };
  
  return (
    <div className="PlayerList">
      {state.players !== undefined && state.players.map(player => <Player key={player.name} getDetails={getDetails} playerCondition={conditionFilter(state.conditions, player)} setCategory={setCategory} {...player}/>)}
    </div>
  )
}

export default PlayerList