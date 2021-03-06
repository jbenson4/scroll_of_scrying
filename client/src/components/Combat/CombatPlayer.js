import React, { useState } from "react";
import './CombatPlayer.scss';
import { ReactComponent as BarbarianIcon } from '../images/barbarian_icon.svg';
import { ReactComponent as DruidIcon } from '../images/druid_icon.svg';
import { ReactComponent as FighterIcon } from '../images/fighter_icon.svg';
import { ReactComponent as PaladinIcon } from '../images/paladin_icon.svg';
import { ReactComponent as RangerIcon } from '../images/ranger_icon.svg';
import { ReactComponent as WizardIcon } from '../images/wizard_icon.svg';
import { ReactComponent as NpcIcon } from '../images/npc_icon.svg';
import { ReactComponent as MonsterIcon } from '../images/monster_icon.svg';

const getClassIcon = (className) => {
  const classIcons =  {
    'barbarian': <BarbarianIcon className="dndClass"/>,
    'druid': <DruidIcon className="dndClass"/>,
    'fighter': <FighterIcon className="dndClass"/>,
    'paladin': <PaladinIcon className="dndClass"/>,
    'ranger': <RangerIcon className="dndClass"/>,
    'wizard': <WizardIcon className="dndClass"/>,
    'npc' : <NpcIcon className='dndClass'/>,
    'monster': <MonsterIcon className='dndClass'/>
  }
  return classIcons[className];
}

const CombatPlayer = (props) => {

  const { name, dnd_class, stats, getDetails, id, onDelete, changeHealth} = props
  const [newHealth, setHealth] = useState();
  function dexToMod (dex) {
    switch(dex) {
      case 1:
        return -5
        break;
      case 2:
      case 3:
        return -4
        break;
      case 4:
      case 5:
        return -3
        break;
      case 6:
      case 7:
        return -2
        break;
      case 8:
      case 9:
        return -1
        break;
      case 10:
      case 11:
        return 0
        break;
      case 12:
      case 13:
        return 1
        break;
      case 14:
      case 15:
        return 2
        break;
      case 16:
      case 17:
        return 3
        break;
      case 18:
      case 19:
        return 4
        break;
      case 20:
      case 21:
        return 5
        break;
      case 22:
      case 23:
        return 6
        break;
      case 24:
      case 25:
        return 7
        break;
      case 26:
      case 27:
        return 8
        break;
      case 28:
      case 29:
        return 9
        break;
      case 30:
        return 10
        break;
      default:
        console.log('dexless');
        break;
    }
     
  }

  function destroy (id) {
    onDelete(id);
  }

  function Health () {
    changeHealth(id, newHealth)
  }


  return (
  <article className="combatPlayer" id={id}>
    {getClassIcon(dnd_class)}
    <div className="middle">
      <h1 onClick={getDetails}>{name}</h1>
      <h2 id="health"> HP: {stats.hp} </h2>
      <form onSubmit={e => e.preventDefault()}>
        <input
        className="newHP"
        id="currentHealth"
        hp='hp'
        type='number'
        placeholder="enter your health"
        value={newHealth}
        onChange={e=>setHealth(e.target.value)}
        />
      </form>
      <button className='editHP' onClick={Health}>HP EDIT</button>
    </div>

    <div className="right">
    <button id={id} onClick={() => destroy(id)} className='closeBtn'>DELETE</button>
      <h4 id='init'> Initiative: {stats.initiative} </h4>
      <h4 id='dex'>Dex Modifier: {dexToMod(stats.dexterity)}</h4>
    </div>
    
  </article>
)};

export default CombatPlayer;