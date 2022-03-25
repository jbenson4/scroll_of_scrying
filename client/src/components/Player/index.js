import React from 'react';
import './Player.scss';
import { ReactComponent as BarbarianIcon } from '../images/barbarian_icon.svg';
import { ReactComponent as DruidIcon } from '../images/druid_icon.svg';
import { ReactComponent as FighterIcon } from '../images/fighter_icon.svg';
import { ReactComponent as PaladinIcon } from '../images/paladin_icon.svg';
import { ReactComponent as RangerIcon } from '../images/ranger_icon.svg';
import { ReactComponent as WizardIcon } from '../images/wizard_icon.svg';
import Condition from '../Condition';

const getClassIcon = (className) => {
  const classIcons =  {
    'barbarian': <BarbarianIcon className="dndClass barbarian"/>,
    'druid': <DruidIcon className="dndClass druid"/>,
    'fighter': <FighterIcon className="dndClass fighter"/>,
    'paladin': <PaladinIcon className="dndClass paladin"/>,
    'ranger': <RangerIcon className="dndClass ranger"/>,
    'wizard': <WizardIcon className="dndClass wizard"/>,
  }
  return classIcons[className];
}

const Player = (props) => {
  const { name, race, dnd_class, stats, condition_id, level, conditions } = props;

  return (
    <article className="Player">
      {getClassIcon(dnd_class)}
      <h1>{name} | lvl {level}</h1>
      <table>
        <thead>
          <tr>
            <th>STR</th>
            <th>DEX</th>
            <th>CON</th>
            <th>INT</th>
            <th>WIS</th>
            <th>CHA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{stats.strength}</td>
            <td>{stats.dexterity}</td>
            <td>{stats.constitution}</td>
            <td>{stats.intelligence}</td>
            <td>{stats.wisdom}</td>
            <td>{stats.charisma}</td>
          </tr>
        </tbody>
      </table>
      <div className="conditions">
        {conditions !== undefined && conditions.map(condition => <Condition key={name + "_" + condition.index} {...condition}/>)}
      </div>
    </article>
  )
}

export default Player;