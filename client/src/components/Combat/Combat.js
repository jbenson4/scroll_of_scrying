import React from 'react';
import CombatPlayerList from './CombatPlayerList';


function Combat (props) {

return(
<main>
  <CombatPlayerList getDetails={props.getDetails} />
</main>)
};

export default Combat;