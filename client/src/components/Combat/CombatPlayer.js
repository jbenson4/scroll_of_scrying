import React from "react";
import './CombatPlayer.scss';
import { ReactComponent as BarbarianIcon } from '../images/barbarian_icon.svg';
import { ReactComponent as DruidIcon } from '../images/druid_icon.svg';
import { ReactComponent as FighterIcon } from '../images/fighter_icon.svg';
import { ReactComponent as PaladinIcon } from '../images/paladin_icon.svg';
import { ReactComponent as RangerIcon } from '../images/ranger_icon.svg';
import { ReactComponent as WizardIcon } from '../images/wizard_icon.svg';

const getClassIcon = (className) => {
  const classIcons =  {
    'barbarian': <BarbarianIcon className="dndClass"/>,
    'druid': <DruidIcon className="dndClass"/>,
    'fighter': <FighterIcon className="dndClass"/>,
    'paladin': <PaladinIcon className="dndClass"/>,
    'ranger': <RangerIcon className="dndClass"/>,
    'wizard': <WizardIcon className="dndClass"/>,
  }
  return classIcons[className];
}

const CombatPlayer = (props) => {

  const { name, dnd_class, stats} = props
  return (
  <article className="combatPlayer">
    {getClassIcon(dnd_class)}
    <div>
      <h1>{name}</h1>
      <h4 id="health"> HP: {stats.hp} </h4>
    </div>
      <h4 id='initiative'> Initiative: {stats.initiative} </h4>
    
  </article>
)};

export default CombatPlayer;