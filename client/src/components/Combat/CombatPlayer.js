import React from "react";
import * as rpgDiceRoller from '@dice-roller/rpg-dice-roller';
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

  const { name, dnd_class, stats} = props
  
  function RollD20 () {
    const roll = new rpgDiceRoller.DiceRoll('d20');
    let result = stats.dexterity + roll.total
    return (result)
  }

  return (
  <article className="combatPlayer">
    {getClassIcon(dnd_class)}
    <div>
      <h1>{name}</h1>
      <h4 id="health"> HP: {stats.hp} </h4>
    </div>

    <div>
    <button onClick={RollD20}>Roll</button>
    
    <button>detail</button>
    <button>X</button>
      <h4 id='dexterity' > initiative:  </h4>
      <h4>dex: {stats.dexterity}</h4>
    </div>
    
  </article>
)};

export default CombatPlayer;