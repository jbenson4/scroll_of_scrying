import React from 'react';
import CombatPlayerList from './CombatPlayerList';


function Combat (props) {

return(
<main>
  <CombatPlayerList getDetails={props.getDetails} players={props.players}/>
</main>)
};

export default Combat;