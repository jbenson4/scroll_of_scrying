import React from 'react';
import PlayerList from './PlayerList';

const Party = ({getDetails, setCategory}) => {
  return (
    <div>
      <PlayerList getDetails={getDetails} setCategory={setCategory} />
    </div>
  )
}

export default Party